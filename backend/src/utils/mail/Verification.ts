import VerificationCodeGenerator from "../code-generator/VerificationCodeGenerator";
import { joiValidator } from "../joi/joiValidator";
import Joi from "joi";

export class Varification {
    private readonly verificationCodeGenerator: VerificationCodeGenerator;

    private async generateCode(): Promise<{ code: string, hashedCode: string }> {
        const code = this.verificationCodeGenerator.generateCode();
        const hashedCode = this.verificationCodeGenerator.hash(code);
        return { code, hashedCode };
    }
    // private async sendEmailVerificationCode(email: string) {
    //     joiValidator({ email: email }, Joi.object({ email: Joi.string().email().required() }));
    //     const { code, hashedCode } = await this.generateCode();
    //     await this.setOtpUserCode(email, 'USER', hashedCode);
    //     await this.emailProvider.sendVerify(email, code);
    //     await this.setOtpUserCode(email, userType, hashedCode);
    // }

    // private async setOtpUserCode()
}