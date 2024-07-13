import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { CompanyModule } from 'src/company/company.module';
import { CompanyService } from 'src/company/company.service';



@Module({
  imports: [CompanyModule],
  controllers: [ReportsController],
  providers: [ReportsService,CompanyService],
})
export class ReportsModule {}
