import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateNationalityDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  nationality: string;

  @ApiProperty({ required: false })
  @IsMongoId()
  @IsOptional()
  user?: ObjectId;
}
