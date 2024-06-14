import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import * as dotenv from 'dotenv';
import { MailsService } from 'src/mails/mails.service';
import VerificationCodeGenerator from 'src/utils/code-generator/VerificationCodeGenerator';
import { ResetOtp, ResetOtpSchema } from 'schemas/resetOtp.schema';

dotenv.config();
@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema},{name:ResetOtp.name,schema:ResetOtpSchema}]),
  JwtModule.register({
    global: true,
    secret : process.env.Secret_Password,
    signOptions: { expiresIn: '1d' },
  })
],
  controllers: [AuthController],
  providers: [AuthService,AuthGuard,MailsService,VerificationCodeGenerator],
  exports:[AuthGuard]
})
export class AuthModule {}
