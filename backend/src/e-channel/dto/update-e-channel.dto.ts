import { PartialType } from '@nestjs/swagger';
import { CreateEChannelDto } from './create-e-channel.dto';

export class UpdateEChannelDto extends PartialType(CreateEChannelDto) {}
