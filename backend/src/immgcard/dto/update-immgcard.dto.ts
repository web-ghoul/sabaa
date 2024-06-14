import { PartialType } from '@nestjs/swagger';
import { CreateImmgcardDto } from './create-immgcard.dto';

export class UpdateImmgcardDto extends PartialType(CreateImmgcardDto) {}
