import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { Nationality } from 'schemas/nationality.schema';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Nationality')
@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Post()
  create(@Body() createNationalityDto: CreateNationalityDto) {
    return this.nationalityService.create(createNationalityDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[], @Query('sort') sort: string, @Query('deleted') deleted: boolean): Promise <Nationality[]> {
    return this.nationalityService.findAll(limit,page,search,selectFields,sort,deleted);
  }

  @Get("counters")
  getCounters(){
    return this.nationalityService.getCounters();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nationalityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNationalityDto: UpdateNationalityDto) {
    return this.nationalityService.update(id, updateNationalityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nationalityService.remove(id);
  }

  @Post('import')
  importNationalities(@Body() createNationalityDto: CreateNationalityDto[])
  {
    return this.nationalityService.importNationalities(createNationalityDto);
  }
}
