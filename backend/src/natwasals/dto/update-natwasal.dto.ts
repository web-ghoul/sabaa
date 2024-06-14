import { PartialType } from '@nestjs/swagger';
import { CreateNatwasalDto } from './create-natwasal.dto';

export class UpdateNatwasalDto extends PartialType(CreateNatwasalDto) {}
