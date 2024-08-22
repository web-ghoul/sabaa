import { PartialType } from '@nestjs/swagger';
import { CreateCustomizeDto } from './create-customize.dto';

export class UpdateCustomizeDto extends PartialType(CreateCustomizeDto) {}
