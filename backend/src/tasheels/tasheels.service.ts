import { Injectable } from '@nestjs/common';
import { CreateTasheelDto } from './dto/create-tasheel.dto';
import { UpdateTasheelDto } from './dto/update-tasheel.dto';

@Injectable()
export class TasheelsService {
  create(createTasheelDto: CreateTasheelDto) {
    return 'This action adds a new tasheel';
  }

  findAll() {
    return `This action returns all tasheels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasheel`;
  }

  update(id: number, updateTasheelDto: UpdateTasheelDto) {
    return `This action updates a #${id} tasheel`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasheel`;
  }
}
