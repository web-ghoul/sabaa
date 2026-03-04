import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
  Res,
} from '@nestjs/common';
import { NatwasalsService } from './natwasals.service';
import { CreateNatwasalDto } from './dto/create-natwasal.dto';
import { UpdateNatwasalDto } from './dto/update-natwasal.dto';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLog } from '../utils/interceptors/logAcitivities.decorator';
import { Response } from 'express';
@Controller('natwasals')
export class NatwasalsController {
  constructor(private readonly natwasalsService: NatwasalsService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'create' })
  create(@Body() createNatwasalDto: CreateNatwasalDto) {
    return this.natwasalsService.create(createNatwasalDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('type') type: string,
    @Query('select') selectFields: string[],
    @Query('search') search: string,
    @Query('sort') sort: string,
  ) {
    return this.natwasalsService.findAll(
      limit,
      page,
      search,
      type,
      sort,
      selectFields,
    );
  }

  @Get('counters')
  getCounters() {
    return this.natwasalsService.getCounters();
  }

  @Get('export')
  export(@Res() res: Response, @Query('fileName') fileName: string) {
    return this.natwasalsService.export(res, fileName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.natwasalsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'update' })
  update(
    @Param('id') id: string,
    @Body() updateNatwasalDto: UpdateNatwasalDto,
  ) {
    return this.natwasalsService.update(id, updateNatwasalDto);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'delete' })
  remove(@Param('id') id: string) {
    return this.natwasalsService.remove(id);
  }
}
