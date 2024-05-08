import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';


ApiTags('employee')
@UseGuards(AuthGuard)
@Controller('employee')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiBody({ type: CreateEmployeeDto })
  @UseInterceptors(FileInterceptor('avatar'))
  create(@Body() createEmployeeDto: CreateEmployeeDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
      
    return this.employeesService.create(createEmployeeDto, file);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[],@Query('sort')sort:string,@Query('nationality')nationality:string,@Query('cardType')cardType:string,@Query('status')status:string,@Query('gender')gender:string,@Query('isCustomer')isCustomer:boolean,@Query('deleted')deleted:boolean ) {
    return this.employeesService.findAll(limit,page,search,selectFields,sort,nationality,cardType,status,gender,isCustomer,deleted);
  }

  @Get("counters")
  getCounters(@Query('isCustomer') isCustomer:boolean) {
    return this.employeesService.getCounters(isCustomer);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.employeesService.update(id, updateEmployeeDto,file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }


}
