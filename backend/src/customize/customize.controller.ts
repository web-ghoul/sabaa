import { Controller, Get, Post, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CustomizeService } from './customize.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('customize')
export class CustomizeController {
  constructor(private readonly customizeService: CustomizeService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'logo', maxCount: 1 },
  ]))
  create(@Body() createCustomizeDto: any,
@UploadedFiles() files?: {logo?: Express.Multer.File}) {
    const uploadedLogo = files?.logo ? files.logo[0] : undefined;
    return this.customizeService.create(createCustomizeDto, uploadedLogo);
  }

  @Get()
  findAll() {
    return this.customizeService.findAll();
  }

}
