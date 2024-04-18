import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import { CreateJobTitleDto } from './dto/create-job-title.dto';
import { UpdateJobTitleDto } from './dto/update-job-title.dto';
import { JobTitle } from 'schemas/jobTitle.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Job-Title')
@Controller('job-title')
export class JobTitleController {
  constructor(private readonly jobTitleService: JobTitleService) {}

  
  @Post()
  create(@Body() createJobTitleDto: CreateJobTitleDto) {
    return this.jobTitleService.create(createJobTitleDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string, @Query('select') selectFields: string[], @Query('sort') sort: string,@Query('deleted') deleted: boolean):Promise<JobTitle[]>{
    return this.jobTitleService.findAll(limit,page,search,selectFields,sort,deleted);
  }

  @Get("counters")
  getCounters(){
    return this.jobTitleService.getCounters();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobTitleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobTitleDto: UpdateJobTitleDto) {
    return this.jobTitleService.update(id, updateJobTitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobTitleService.remove(id);
  }
}
