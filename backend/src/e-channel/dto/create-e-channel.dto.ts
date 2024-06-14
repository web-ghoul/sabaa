import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsMongoId } from 'class-validator';
export class CreateEChannelDto {

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
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  eChannelNotes: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  personCode: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  uid: string;

  @IsString()
  @IsNotEmpty()
  emiratesId: string;

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
