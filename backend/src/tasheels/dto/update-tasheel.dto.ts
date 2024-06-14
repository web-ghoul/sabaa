import { PartialType } from '@nestjs/swagger';
import { CreateTasheelDto } from './create-tasheel.dto';

export class UpdateTasheelDto extends PartialType(CreateTasheelDto) {}
