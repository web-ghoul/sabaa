import { Type } from 'class-transformer';
import { IsString, IsDate, IsBoolean, IsOptional, IsNumber, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateTransactionDto {
  @IsString()
  transactionNo: string;

  @IsMongoId()
  employeeId: ObjectId;

  @IsOptional()
  @IsString()
  serialNo?: string;

  @IsString()
  companyCode: string;

  @IsString()
  companyId: string;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  employeeName?: string;

  @IsOptional()
  @IsString()
  employeeNameAr?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsDate()
  dob?: Date;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsString()
  idNationality: string;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsString()
  passportNumber?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  passportExpiry?: Date;

  @IsOptional()
  @IsString()
  job?: string;

  @IsString()
  personCode: string;

  @IsOptional()
  @IsString()
  uid?: string;

  @IsOptional()
  @IsString()
  emiratesNo?: string;

  @IsOptional()
  @IsString()
  lcNumber?: string;

  @IsOptional()
  @IsString()
  lcNo?: string;

  @IsOptional()
  @IsDate()
  lcExpiryDate?: Date;

  @IsOptional()
  @IsDate()
  visitExpiryDate?: Date;

  @IsOptional()
  @IsDate()
  tawjeehDate?: Date;

  @IsOptional()
  @IsDate()
  medicalDate?: Date;

  @IsOptional()
  @IsDate()
  changeStatusDate?: Date;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  wpStatus?: string;

  @IsOptional()
  @IsDate()
  statusDate?: Date;

  @IsOptional()
  @IsString()
  cardType?: string;

  @IsOptional()
  @IsNumber()
  salary?: number;

  @IsOptional()
  @IsString()
  remarks?: string;


  @IsOptional()
  @IsDate()
  residenceExpiryDate?: Date;

  @IsOptional()
  @IsBoolean()
  deleted?: boolean;
}
