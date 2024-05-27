import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EChannelService } from './e-channel.service';
import { CreateEChannelDto } from './dto/create-e-channel.dto';
import { UpdateEChannelDto } from './dto/update-e-channel.dto';

@Controller('e-channel')
export class EChannelController {
  constructor(private readonly eChannelService: EChannelService) {}

  @Post()
  create(@Body() createEChannelDto: CreateEChannelDto) {
    return this.eChannelService.create(createEChannelDto);
  }

  @Get()
  findAll() {
    return this.eChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eChannelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEChannelDto: UpdateEChannelDto) {
    return this.eChannelService.update(+id, updateEChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eChannelService.remove(+id);
  }
}
