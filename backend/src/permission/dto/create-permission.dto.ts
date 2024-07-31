import { IsBoolean, IsOptional, IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class PermissionsObjectDto {
  @IsBoolean()
  @IsOptional()
  read?: boolean;

  @IsBoolean()
  @IsOptional()
  write?: boolean;

  @IsBoolean()
  @IsOptional()
  update?: boolean;

  @IsBoolean()
  @IsOptional()
  delete?: boolean;
}

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => PermissionsObjectDto)
  permissions: Record<string, PermissionsObjectDto>;
}
