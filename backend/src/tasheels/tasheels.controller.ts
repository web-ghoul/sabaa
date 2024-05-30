import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasheelsService } from './tasheels.service';
import { CreateTasheelDto } from './dto/create-tasheel.dto';
import { UpdateTasheelDto } from './dto/update-tasheel.dto';

@Controller('tasheels')
export class TasheelsController {
  constructor(private readonly tasheelsService: TasheelsService) {}

  @Post()
  create(@Body() createTasheelDto: CreateTasheelDto) {
    return this.tasheelsService.create(createTasheelDto);
  }

  @Get()
  findAll() {
    return this.tasheelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasheelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasheelDto: UpdateTasheelDto) {
    return this.tasheelsService.update(+id, updateTasheelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasheelsService.remove(+id);
  }
}
