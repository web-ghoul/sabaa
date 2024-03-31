import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
    
    @IsString()
    @Length(3,20)
    @ApiProperty()
    name: string;
    
    @IsEmail()
    @ApiProperty({
        description: 'Email of user',
        minimum: 1,
        default: 1,
      })
    email: string;
    @ApiProperty()
    @IsString()
    password: string;
    @ApiProperty()
    @IsString()
    phone: string;
    @ApiProperty()
    @IsString()
    role: string;
    

}