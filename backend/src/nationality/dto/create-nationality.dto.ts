import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateNationalityDto {
  @ApiProperty()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsString()
  nationality: string;

  @ApiProperty({ required: false })
  @IsMongoId()
  @IsOptional()
  user?: string;
}
