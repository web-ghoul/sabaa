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
import { Permission, PermissionSchema } from 'schemas/permissions.schema';
import { PermissionModule } from 'src/permission/permission.module';
import { PermissionService } from 'src/permission/permission.service';
import { MailsModule } from 'src/mails/mails.module';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Permission.name, schema: PermissionSchema },
      { name: ResetOtp.name, schema: ResetOtpSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.Secret_Password,
      signOptions: { expiresIn: '1d' },
    }),
    PermissionModule,
    MailsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
