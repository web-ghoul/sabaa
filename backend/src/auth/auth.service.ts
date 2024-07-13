
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { LoginUserDto } from './dtos/login.dto';
import * as bcrypt from 'bcryptjs';
import { CreateOtpDto, resetOtpDto, resetPasswordDto } from './dtos/createOtp.dto';

import { MailsService } from 'src/mails/mails.service';
import { ResetOtp } from 'schemas/resetOtp.schema';
import VerificationCodeGenerator from 'src/utils/code-generator/VerificationCodeGenerator';
import { Permission } from 'schemas/permissions.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel (User.name) private userModel: Model<User>,@InjectModel (Permission.name) private permissionModel: Model<Permission>, private jwtService: JwtService,
    private mailService: MailsService,
    @InjectModel (ResetOtp.name) private resetOtpModel: Model<ResetOtp>,
    private verificationCodeGenerator: VerificationCodeGenerator
  ) {}

    async signIn(loginData: LoginUserDto): Promise<any> {
        const user: User = await this.userModel.findOne({email:loginData.email});
    
        if (user && user.deleted == false) {
          // Compare hashed passwords
          const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
          if (isPasswordValid) {
            // Passwords match, return user without password
            const permissionData = await this.permissionModel.findOne({name: user.role})
            const payload = { id: user._id, name: user.name, role: user.role };
            return {
                message : "login successfully",
                token: await this.jwtService.signAsync(payload),
                userId: user._id,
                image: user.avatar,
                permission: permissionData.permissions
            };
          }
        }
        throw new HttpException("invalid email or password" , HttpStatus.CONFLICT );
      }

    async createOtp(createOtpDto: CreateOtpDto): Promise<any> {

        const user: User = await this.userModel.findOne({email:createOtpDto.email});

        if(user)
        {
          const found = await this.resetOtpModel.findOne({email: createOtpDto.email})
          if(!found)
          {
              await this.mailService.sendEmailVerificationCode(createOtpDto.email)
          }

        }

        return {message : "email sent successfully"}
    }

    async verifyOtp(OtpDto: resetOtpDto){ 
        const hashed = this.verificationCodeGenerator.hash(OtpDto.otp)

        const data = await this.resetOtpModel.findOne({otp: hashed})

        if(data)
          {
            return {message : "otp verified successfully", unique: hashed}
          }else
          {
            throw new HttpException("invalid otp" , HttpStatus.CONFLICT );
          }
    }

    async resetPasswort(resetOtpDto: resetPasswordDto){
      
      const check = await this.resetOtpModel.findOne({otp: resetOtpDto.otp})

      if(check)
        {
          const hashedPassword =await bcrypt.hash(resetOtpDto.password, 10 );

          await this.userModel.updateOne({email: check.email}, {password: hashedPassword})

          await this.resetOtpModel.deleteOne({otp: resetOtpDto.otp})
          

        }else
        {
          throw new HttpException("Something went wrong" , HttpStatus.CONFLICT );
        }
    }
}
