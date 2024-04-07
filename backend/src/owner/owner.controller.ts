import { Owner } from './entities/owner.entity';
import { Controller, Get, Post, Body, Param, Delete, Query, Patch, ParseFilePipe, UploadedFile, MaxFileSizeValidator, FileTypeValidator, UseInterceptors } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

ApiTags('owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @ApiBody({ type: CreateOwnerDto })
  @UseInterceptors(FileInterceptor('avatar'))
  create(@Body() createOwnerDto: CreateOwnerDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.ownerService.create(createOwnerDto,file);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[],@Query('sort')sort:string,@Query('dobFrom')dobFrom:string,@Query('nationality')nationality:string,@Query('state')state:string,@Query('dobTo')dobTo:string): Promise<Owner[]> {
    return this.ownerService.findAll(limit,page,search,selectFields,sort,nationality,state,dobFrom,dobTo);
  }
  @Get("counters")
  getCounters(){
    return this.ownerService.getCounters();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.ownerService.update(id, updateOwnerDto,file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerService.remove(id);
  }

  @Post('import')
  importOwners(@Body() createOwnerDto: CreateOwnerDto[])
  {
    return this.ownerService.importOwners(createOwnerDto);
  }
}
