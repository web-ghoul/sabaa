import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import { CreateJobTitleDto } from './dto/create-job-title.dto';
import { UpdateJobTitleDto } from './dto/update-job-title.dto';
import { JobTitle } from '../schemas/jobTitle.schema';
import { ApiTags } from '@nestjs/swagger';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { User } from 'src/utils/decorators/User.decorator';

@ApiTags('Job-Title')
@Controller(['job-title', 'jobs'])
export class JobTitleController {
  constructor(private readonly jobTitleService: JobTitleService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'create' })
  create(@User('id') user, @Body() createJobTitleDto: CreateJobTitleDto) {
    return this.jobTitleService.create(createJobTitleDto, user);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('select') selectFields: string[],
    @Query('sort') sort: string,
    @Query('deleted') deleted: boolean,
  ): Promise<JobTitle[]> {
    return this.jobTitleService.findAll(
      limit,
      page,
      search,
      selectFields,
      sort,
      deleted,
    );
  }

  @Get('counters')
  getCounters() {
    return this.jobTitleService.getCounters();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobTitleService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'update' })
  update(
    @Param('id') id: string,
    @Body() updateJobTitleDto: UpdateJobTitleDto,
  ) {
    return this.jobTitleService.update(id, updateJobTitleDto);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({ action: 'delete' })
  remove(@Param('id') id: string) {
    return this.jobTitleService.remove(id);
  }
}
