import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { Model } from 'mongoose';
import { ResetOtp } from '../schemas/resetOtp.schema';
import VerificationCodeGenerator from 'src/utils/code-generator/VerificationCodeGenerator';
import { joiValidator } from 'src/utils/joi/joiValidator';

@Injectable()
export class MailsService {
  private readonly from: string;

  constructor(
    private mailerService: MailerService,
    private verificationCodeGenerator: VerificationCodeGenerator,
    @InjectModel('ResetOtp') private resetOtpModel: Model<ResetOtp>,
  ) {
    this.from = process.env.EMAIL;
  }

  async generateCode(): Promise<{ code: string; hashedCode: string }> {
    const code = this.verificationCodeGenerator.generateCode();
    const hashedCode = this.verificationCodeGenerator.hash(code);
    return { code, hashedCode };
  }

  private async sendMail(to: string, code: string, expireTime: Date) {
    try {
      await this.mailerService.sendMail({
        to: to,
        from: this.from,
        subject: 'Forget Password',
        template: './templates/forgetPassword',
        context: {
          code,
          expire: expireTime,
        },
      });
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Error while sending email',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async sendEmailVerificationCode(email: string) {
    joiValidator(
      { email: email },
      Joi.object({ email: Joi.string().email().required() }),
    );
    const { code, hashedCode } = await this.generateCode();
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 4);

    // Create a new reset OTP document with the expiry date
    await this.resetOtpModel.create({ email, otp: hashedCode, expiryDate });
    await this.sendMail(email, code, expiryDate);
  }
}
