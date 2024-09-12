import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsMongoId, IsDateString, IsObject } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateOwnerDto {
  @ApiProperty()
  @IsString()
  _id?: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  nameAr: string;

  @ApiProperty()
  @IsString()
  remarks: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  avatar: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  job: string;

  @ApiProperty()
  @IsString()
  state: string;

  
  @IsOptional()
  @IsObject()
  medical: object;

  @IsOptional()
  @IsString()
  medicalPolicyNo: string;

  @IsOptional()
  @IsDateString()
  medicalExpiryDate: Date;

  @IsOptional()
  @IsString()
  iLOEPolicyNo: string;

  @IsOptional()
  @IsObject()
  iLOE: object;

  @ApiProperty()
  @IsDate()
  dob: Date;

  @ApiProperty()
  idNationality: string;

  @ApiProperty()
  @IsString()
  nationality: string;

  @ApiProperty()
  @IsString()
  uid: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  proCode?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  emiratesId?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({ required: false })
  @IsMongoId()
  @IsOptional()
  user?: ObjectId;
}
