import { IsString, IsNotEmpty, IsOptional, IsDateString, IsNumber, IsObject, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateEmployeeDto {

  @IsOptional()
  @IsNotEmpty()
  @IsMongoId()
  _id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  nameAr: string;

  @IsOptional()
  @IsString()
  avatar: string;

  @IsOptional()
  @IsString()
  personCode: string;

  @IsNotEmpty()
  @IsString({ each: true })
  companyId: string[];

  @IsOptional()
  @IsDateString()
  dob: Date;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  cardType: string;

  @IsOptional()
  @IsString()
  job: string;

  @IsOptional()
  @IsString()
  visaFileNumber: string;

  @IsOptional()
  @IsNumber()
  salary: number;

  @IsOptional()
  @IsObject()
  medical: object;

  @IsOptional()
  @IsObject()
  iLOE: object;

  @IsOptional()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  idNationality?: string;

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  passportNumber: string;

  @IsOptional()
  @IsDateString()
  passportExpiry: Date;

  @IsOptional()
  @IsString()
  uid: string;

  @IsOptional()
  @IsDateString()
  residenceExpireDate: Date;

  @IsOptional()
  @IsString()
  workPermitNumber: string;

  @IsOptional()
  @IsDateString()
  lcExpireDate: Date;

  @IsOptional()
  @IsString()
  mobileNumber: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  remarks: string;

  @IsOptional()
  @IsString()
  emiratesId: string;

  @IsOptional()
  user: ObjectId;
}
