import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsMongoId } from 'class-validator';

export class CreateTasheelDto {
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @IsString()
    @IsNotEmpty()
    username: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  
    @IsString()
    @IsNotEmpty()
    security1: string;

    @IsString()
    @IsNotEmpty()
    name: string;
    
  
    @IsString()
    @IsNotEmpty()
    security2: string;

    @IsString()
    @IsNotEmpty()
    personCode: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    mobile: string;

    @IsString()
    @IsNotEmpty()
    nameAr: string;

    @IsString()
    @IsNotEmpty()
    notes: string;
  
    @IsMongoId()
    @IsOptional()
    employee?: string;
  
    @IsMongoId()
    @IsOptional()
    owner?: string;
  
    @IsBoolean()
    @IsOptional()
    deleted?: boolean;
}
