import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NatwasalsService } from './natwasals.service';
import { CreateNatwasalDto } from './dto/create-natwasal.dto';
import { UpdateNatwasalDto } from './dto/update-natwasal.dto';

@Controller('natwasals')
export class NatwasalsController {
  constructor(private readonly natwasalsService: NatwasalsService) {}

  @Post()
  create(@Body() createNatwasalDto: CreateNatwasalDto) {
    return this.natwasalsService.create(createNatwasalDto);
  }

  @Get()
  findAll() {
    return this.natwasalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.natwasalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNatwasalDto: UpdateNatwasalDto) {
    return this.natwasalsService.update(+id, updateNatwasalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.natwasalsService.remove(+id);
  }
}
