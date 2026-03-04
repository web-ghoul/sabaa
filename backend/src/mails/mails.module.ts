import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ResetOtp, ResetOtpSchema } from '../schemas/resetOtp.schema';
import VerificationCodeGenerator from '../utils/code-generator/VerificationCodeGenerator';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ResetOtp.name, schema: ResetOtpSchema },
    ]),
    MailerModule.forRoot({
      // transport: 'smtps://amr.khaled@switch-advertising.com:b?/}=?/3XpL}":X@smtp.titan.email',
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: `"Sabaa" <${process.env.EMAIL}>`,
      },
      template: {
        dir: join(__dirname, '../../../src/mails'),
        adapter: new PugAdapter(), // Use PugAdapter for Pug templates
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [MailsController],
  providers: [MailsService, VerificationCodeGenerator],
  exports: [MailsService, VerificationCodeGenerator],
})
export class MailsModule {}
