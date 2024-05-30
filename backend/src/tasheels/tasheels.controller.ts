import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Res, Query } from '@nestjs/common';
import { TasheelsService } from './tasheels.service';
import { CreateTasheelDto } from './dto/create-tasheel.dto';
import { UpdateTasheelDto } from './dto/update-tasheel.dto';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { Response } from 'express';

@Controller('tasheels')
export class TasheelsController {
  constructor(private readonly tasheelsService: TasheelsService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "create"})
  create(@Body() createTasheelDto: CreateTasheelDto) {
    return this.tasheelsService.create(createTasheelDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('type') type: string,@Query('select') selectFields: string[], @Query('search') search: string, @Query('sort') sort: string) {
    return this.tasheelsService.findAll(limit,page,search,type,sort,selectFields);
  }

  @Get("counters")
  getCounters() {
    return this.tasheelsService.getCounters();
  }

  @Get("export")
  export(@Res()  res: Response,@Query('fileName') fileName: string) {
    return this.tasheelsService.export(res,fileName);  
  }


  @Get(':id')
  
  findOne(@Param('id') id: string) {
    return this.tasheelsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "update"})
  update(@Param('id') id: string, @Body() updateTasheelDto: UpdateTasheelDto) {
    return this.tasheelsService.update(id, updateTasheelDto);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "delete"})
  remove(@Param('id') id: string) {
    return this.tasheelsService.remove(id);
  }
}
