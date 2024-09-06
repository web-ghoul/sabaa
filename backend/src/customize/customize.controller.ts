import { Controller, Get, Post, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CustomizeService } from './customize.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/roles.decorator';

@Controller('customize')
export class CustomizeController {
  constructor(private readonly customizeService: CustomizeService) {}

  @Public()
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'logo', maxCount: 1 },
  ]))
  create(@Body() createCustomizeDto: any,
@UploadedFiles() files?: {logo?: Express.Multer.File}) {
    const uploadedLogo = files?.logo ? files.logo[0] : undefined;
    return this.customizeService.create(createCustomizeDto, uploadedLogo);
  }

  @Public()
  @Get()
  findAll() {
    return this.customizeService.findAll();
  }

}
