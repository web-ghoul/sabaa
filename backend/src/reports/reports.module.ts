import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { CompanyModule } from '../company/company.module';
import { CompanyService } from '../company/company.service';

@Module({
  imports: [CompanyModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
