import { Controller, Get, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from 'express';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('EmployeeDetail/:id')
  async EmployeePdf(@Param('id') id: string,@Res()  res: Response) {
    const pdfDoc: any = await this.reportsService.generateEmployeePdf(id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=employeeDetail.pdf',
    );

    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get()
  findAll() {
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
   
  }
}
