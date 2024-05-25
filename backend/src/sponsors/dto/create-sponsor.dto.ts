import { IsString, IsOptional, IsDate, IsBoolean, IsMongoId, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class CreateSponsorDto {
  @IsString()
  uid: string;

  @IsString()
  name: string;

  @IsString()
  nameAr: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dob?: Date;

  @IsString()
  idNationality: string;

  @IsString()
  relativeRelation: string;

  @IsString()
  owner: ObjectId;

  @IsString()
  employee: ObjectId;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  residenceExpiryDate?: Date;

  @IsOptional()
  @IsString()
  fileImmgNo?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  emiratesId?: string;

  @IsOptional()
  @IsString()
  personCode?: string;

  @IsOptional()
  @IsMongoId()
  user?: ObjectId;

  @IsOptional()
  @IsBoolean()
  deleted?: boolean;
}
