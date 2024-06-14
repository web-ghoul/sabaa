import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMongoId, IsOptional, IsString, Length } from "class-validator";
import { ObjectId } from "mongoose";

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

    @ApiProperty({ required: false })
    @IsMongoId()
    @IsOptional()
    user?: ObjectId;
    

}