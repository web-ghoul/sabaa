import { IsEmail, IsString } from "class-validator";
export class CreateOtpDto{
    @IsEmail()
    email: string;
}

export class resetOtpDto{
    @IsString()
    otp: string;
}

export class resetPasswordDto{
    @IsString()
    otp: string;

    @IsString()
    password: string;

}