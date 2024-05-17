import { Owner } from './entities/owner.entity';
import { Controller, Get, Post, Body, Param, Delete, Query, Patch, ParseFilePipe, UploadedFile, MaxFileSizeValidator, FileTypeValidator, UseInterceptors, UseGuards, Res } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { User } from 'src/utils/decorators/User.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { Response } from 'express';


ApiTags('owner')
@UseGuards(AuthGuard)
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "create"})
  @ApiBody({ type: CreateOwnerDto })
  @UseInterceptors(FileInterceptor('avatar'))
  create(@User("id") user, @Body() createOwnerDto: CreateOwnerDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {

    return this.ownerService.create(createOwnerDto,file,user);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[],@Query('sort')sort:string,@Query('dobFrom')dobFrom:string,@Query('nationality')nationality:string,@Query('state')state:string,@Query('dobTo')dobTo:string,@Query('deleted')deleted:boolean,@Query('type')type:string): Promise<Owner[]> {
    return this.ownerService.findAll(limit,page,search,selectFields,sort,nationality,state,dobFrom,dobTo,deleted,type);
  }
  @Get("counters")
  getCounters(@Query('type') type:string) {
    return this.ownerService.getCounters(type);
  }

  @Get("export")
  export(@Res()  res: Response) {
    return this.ownerService.export(res);  
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "update"})
  update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto, @UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({ maxSize: 10000000 }),
    new FileTypeValidator({ fileType: 'image' })],fileIsRequired: false})) file: Express.Multer.File) {
    return this.ownerService.update(id, updateOwnerDto,file);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "delete"})
  remove(@Param('id') id: string) {
    return this.ownerService.remove(id);
  }

  @Post('import')
  importOwners(@Body() createOwnerDto: CreateOwnerDto[])
  {
    return this.ownerService.importOwners(createOwnerDto);
  }
}
