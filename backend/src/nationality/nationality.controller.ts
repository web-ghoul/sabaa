import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Nationality } from 'schemas/nationality.schema';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { NationalityService } from './nationality.service';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { User } from 'src/utils/decorators/User.decorator';
@ApiTags('Nationality')
@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "create"})
  create(@User("id") user,@Body() createNationalityDto: CreateNationalityDto) {
    return this.nationalityService.create(createNationalityDto,user);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('select') selectFields: string[],
    @Query('sort') sort: string,
    @Query('deleted') deleted: boolean,
  ): Promise<Nationality[]> {
    return this.nationalityService.findAll(
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
    return this.nationalityService.getCounters();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nationalityService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "update"})
  update(
    @Param('id') id: string,
    @Body() updateNationalityDto: UpdateNationalityDto,
  ) {
    return this.nationalityService.update(id, updateNationalityDto);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "delete"})
  remove(@Param('id') id: string) {
    return this.nationalityService.remove(id);
  }

  @Post('import')
  importNationalities(@Body() createNationalityDto: CreateNationalityDto[]) {
    return this.nationalityService.importNationalities(createNationalityDto);
  }
}
