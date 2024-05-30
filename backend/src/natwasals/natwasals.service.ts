import { Injectable } from '@nestjs/common';
import { CreateNatwasalDto } from './dto/create-natwasal.dto';
import { UpdateNatwasalDto } from './dto/update-natwasal.dto';

@Injectable()
export class NatwasalsService {
  create(createNatwasalDto: CreateNatwasalDto) {
    return 'This action adds a new natwasal';
  }

  findAll() {
    return `This action returns all natwasals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} natwasal`;
  }

  update(id: number, updateNatwasalDto: UpdateNatwasalDto) {
    return `This action updates a #${id} natwasal`;
  }

  remove(id: number) {
    return `This action removes a #${id} natwasal`;
  }
}
