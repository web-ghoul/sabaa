import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateJobTitleDto {
    @ApiProperty()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsString()
  ENSCOCode: string;

  @ApiProperty()
  @IsString()
  jobTitle: string;

  @ApiProperty({ required: false })
  @IsMongoId()
  @IsOptional()
  user?: ObjectId;
}
