import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { Body, Controller, Patch, Post, ValidationPipe } from '@nestjs/common';
import { LoginUserDto } from './dtos/login.dto';
import { Public } from './roles.decorator';
import { ApiTags } from '@nestjs/swagger';
import { CreateOtpDto, resetOtpDto, resetPasswordDto } from './dtos/createOtp.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
    constructor(private authService :AuthService) {}

    @Public()
    @Throttle({default : {limit : 10 , ttl: 60000}})
    @Post('login')
    login(@Body(ValidationPipe) loginData: LoginUserDto) {
        return this.authService.signIn(loginData);
    }

    @Public()
    @Throttle({default : {limit : 3 , ttl: 60000}})
    @Post('forget-password')
    forgetPassword(@Body(ValidationPipe) resetData: CreateOtpDto) {
        return this.authService.createOtp(resetData);
    }


    @Public()
    @Throttle({default : {limit : 3 , ttl: 60000}})
    @Post('validate-otp')
    validatOtp(@Body() resetData: resetOtpDto) {
        return this.authService.verifyOtp(resetData)
    }

    @Public()
    @Throttle({default : {limit : 3 , ttl: 60000}})
    @Patch('reset-password')
    resetPassword(@Body(ValidationPipe) resetData: resetPasswordDto) {
        return this.authService.resetPasswort(resetData)
    }

    

}
