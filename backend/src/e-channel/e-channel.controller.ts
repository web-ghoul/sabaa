import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, Res } from '@nestjs/common';
import { EChannelService } from './e-channel.service';
import { CreateEChannelDto } from './dto/create-e-channel.dto';
import { UpdateEChannelDto } from './dto/update-e-channel.dto';
import { ApiTags } from '@nestjs/swagger';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { Response } from 'express';

ApiTags('e-channel')
@Controller(['e-channel', 'e-channels'])
export class EChannelController {
  constructor(private readonly eChannelService: EChannelService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'create' })
  create(@Body() createEChannelDto: CreateEChannelDto) {
    return this.eChannelService.create(createEChannelDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('type') type: string,
    @Query('select') selectFields: string[],
    @Query('search') search: string,
    @Query('status') status: string,
    @Query('gender') gender: string,
    @Query('sort') sort: string,
  ) {
    return this.eChannelService.findAll(
      limit,
      page,
      search,
      type,
      status,
      gender,
      sort,
      selectFields,
    );
  }

  @Get('counters')
  getCounters() {
    return this.eChannelService.getCounters();
  }

  @Get('export')
  export(@Res() res: Response, @Query('fileName') fileName: string) {
    return this.eChannelService.export(res, fileName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eChannelService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'update' })
  update(
    @Param('id') id: string,
    @Body() updateEChannelDto: UpdateEChannelDto,
  ) {
    return this.eChannelService.update(id, updateEChannelDto);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'delete' })
  remove(@Param('id') id: string) {
    return this.eChannelService.remove(id);
  }
}
