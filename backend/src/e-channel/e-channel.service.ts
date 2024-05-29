import { Injectable } from '@nestjs/common';
import { CreateEChannelDto } from './dto/create-e-channel.dto';
import { UpdateEChannelDto } from './dto/update-e-channel.dto';

@Injectable()
export class EChannelService {
  create(createEChannelDto: CreateEChannelDto) {
    return 'This action adds a new eChannel';
  }

  findAll() {
    return `This action returns all eChannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eChannel`;
  }

  update(id: number, updateEChannelDto: UpdateEChannelDto) {
    return `This action updates a #${id} eChannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} eChannel`;
  }
}
