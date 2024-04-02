import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from 'schemas/company.schema';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  create(@Body() createCompanyDto: CreateCompanyDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.companyService.create(createCompanyDto,file);
  }

  @Get()
  

  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[],@Query('sort') sort:string,@Query('id') id:string): Promise <Company[]> {
    return this.companyService.findAll(limit,page,search,selectFields,sort,id);
  }

  @Get("ManageOwnersAndPro")
  ManageOwnersAndPro(@Query('companyId') companyId , @Query('id') identity, @Query('operation') operation, @Query('typeOfPerson') typeOfPerson){

    return this.companyService.ManageCompanyOwnersAndPro(companyId,identity,operation,typeOfPerson);
  }
  @Get("counters")
  getCounters(){
    return this.companyService.getCounters();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo'))
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.companyService.update(id, updateCompanyDto,file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }

  


}
