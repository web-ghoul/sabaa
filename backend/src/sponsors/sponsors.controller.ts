import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, MaxFileSizeValidator, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/utils/decorators/User.decorator';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';

ApiTags('sponsor')

@Controller('sponsor')
export class SponsorsController {
  constructor(private readonly sponsorsService: SponsorsService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "create"})
  @ApiBody({ type: CreateSponsorDto })
  @UseInterceptors(FileInterceptor('avatar'))
  create(@User("id") user,@Body() createSponsorDto: CreateSponsorDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.sponsorsService.create(createSponsorDto, file,user);
  }

  // @Get()
  // findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[],@Query('sort')sort:string,@Query('dobFrom')dobFrom:string,@Query('nationality')nationality:string,@Query('state')state:string,@Query('dobTo')dobTo:string,@Query('deleted')deleted:boolean,@Query('type')type:string): Promise<Sponsor[]> {
  //   return this.sponsorsService.findAll(limit,page,search,selectFields,sort,nationality,state,dobFrom,dobTo,deleted,type);
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sponsorsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "update"})
  update(@Param('id') id: string, @Body() updateSponsorDto: UpdateSponsorDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.sponsorsService.update(id, updateSponsorDto, file);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "delete"})
  remove(@Param('id') id: string) {
    return this.sponsorsService.remove(id);
  }
}
