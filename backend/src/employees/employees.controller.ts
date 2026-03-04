import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Query,
  Res,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '../utils/decorators/User.decorator';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLog } from '../utils/interceptors/logAcitivities.decorator';
import { Response } from 'express';

ApiTags('employee');

@Controller(['employee', 'employees'])
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiBody({ type: CreateEmployeeDto })
  @UseInterceptors(FileInterceptor('avatar'))
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'create' })
  create(
    @User('id') user,
    @Body() createEmployeeDto: CreateEmployeeDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'image' }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.employeesService.create(createEmployeeDto, file, user);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('select') selectFields: string[],
    @Query('sort') sort: string,
    @Query('nationality') nationality: string,
    @Query('cardType') cardType: string,
    @Query('status') status: string,
    @Query('gender') gender: string,
    @Query('deleted') deleted: boolean,
  ) {
    console.log(page);
    console.log(limit);
    return this.employeesService.findAll(
      limit,
      page,
      search,
      selectFields,
      sort,
      nationality,
      cardType,
      status,
      gender,
      deleted,
    );
  }

  @Get('counters')
  getCounters() {
    return this.employeesService.getCounters();
  }

  @Post('checkExistance')
  checkExistance(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.checkExistance(createEmployeeDto);
  }

  @Get('export')
  export(@Res() res: Response, @Query('fileName') fileName: string) {
    return this.employeesService.export(res, fileName);
  }

  @Get('report')
  report(@Res() res: Response) {
    return this.employeesService.report(res);
  }

  @Get('employeePdf/:id')
  employeePdf(@Param('id') id: string, @Res() res: Response) {
    return this.employeesService.employeePdf(id, res);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'update' })
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'image' }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.employeesService.update(id, updateEmployeeDto, file);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'delete' })
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
