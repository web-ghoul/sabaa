import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Company } from 'schemas/company.schema';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { User } from 'src/utils/decorators/User.decorator';
import { Response } from 'express';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "create"})
  create(@User("id") user,
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'image' }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.companyService.create(createCompanyDto, file, user);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('search') search: string,
    @Query('select') selectFields: string[],
    @Query('sort') sort: string,
    @Query('id') id: string,
    @Query() query: any,
  ): Promise<Company[]> {
    return this.companyService.findAll(
      limit,
      page,
      search,
      selectFields,
      sort,
      id,
      query,
    );
  }

  @Get('ManageOwnersAndPro')
  ManageOwnersAndPro(
    @Query('companyId') companyId,
    @Query('id') identity,
    @Query('operation') operation,
    @Query('typeOfPerson') typeOfPerson,
  ) {
    return this.companyService.ManageCompanyOwnersAndPro(
      companyId,
      identity,
      operation,
      typeOfPerson,
    );
  }
  @Get('counters')
  getCounters() {
    return this.companyService.getCounters();
  }

  @Get("export")
  export(@Res()  res: Response) {
    return this.companyService.export(res);  
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo'))
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "update"})
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'image' }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.companyService.update(id, updateCompanyDto, file);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "delete"})
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
