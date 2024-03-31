import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { LoginUserDto } from './dtos/login.dto';
import { Public } from './roles.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AuthController {
    constructor(private authService :AuthService) {}

    @Public()
    @Throttle({default : {limit : 3 , ttl: 60000}})
    @Post('login')
    login(@Body(ValidationPipe) loginData: LoginUserDto) {
        return this.authService.signIn(loginData);
    }
}
