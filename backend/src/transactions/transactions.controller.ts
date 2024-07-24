import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, Res } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { Response } from 'express';

ApiTags('transactions')

@Controller(['work-permit', 'approved-work-permit', 'new-lc', 'renew-lc', 'transaction'])
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "create"})
  @ApiBody({ type: CreateTransactionDto })
  create(@Body() createTransactionDto: any) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('page') page: number, @Query('search') search: string,@Query('select') selectFields: string[],@Query('sort')sort:string,@Query('expireWorkPermitFrom')expireWorkPermitFrom:string,@Query('status')status:string,@Query('expireWorkPermitTo')expireWorkPermitTo:string,@Query('deleted')deleted:boolean,@Query('type')type:string,@Query('residenceTo')residenceTo:string,@Query('residenceFrom')residenceFrom:string,@Query('changeStatusDateFrom')changeStatusDateFrom:string,@Query('changeStatusDateTo')changeStatusDateTo:string) {
    return this.transactionsService.findAll(limit,page,search,selectFields,sort,expireWorkPermitFrom,status,expireWorkPermitTo,deleted,type,residenceTo,residenceFrom,changeStatusDateFrom,changeStatusDateTo);
  }

  @Get("counters")
  getCounters() {
    return this.transactionsService.getCounters();
  }
  
  @Get("export")
  export(@Res()  res: Response,@Query('fileName') fileName: string) {
    return this.transactionsService.export(res,fileName);  
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "update"})
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  @UseInterceptors(LogInterceptor)
  @ActivityLog({action: "delete"})
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(id);
  }
}
