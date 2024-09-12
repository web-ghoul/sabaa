import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { ActivityLogSchema } from 'schemas/activityLog.schema';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { EmployeeSchema } from 'schemas/employee.schema';
import { TransactionSchema } from 'schemas/transaction.schema';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { EmployeesService } from 'src/employees/employees.service';
import { EChannelSchema } from 'schemas/eChannel.schema';
import { Natwasal, NatwasalSchema } from 'schemas/natwasal.schema';
import { Tasaheel, TasaheelSchema } from 'schemas/tasaheel.schema';
import { Company, CompanySchema } from 'schemas/company.schema';
import { EmployeesModule } from 'src/employees/employees.module';
import { EmployeePdfGenerator } from 'src/employees/pdfGenerators/EmployeePdfMaker';
import { CompanyService } from 'src/company/company.service';


@Module({
  imports: [EmployeesModule,
    MongooseModule.forFeature([
      { name: 'EChannel', schema: EChannelSchema },
      { name: Natwasal.name, schema: NatwasalSchema },
      { name: Tasaheel.name, schema: TasaheelSchema },
      { name: 'Transaction', schema: TransactionSchema },
      { name: 'Employee', schema: EmployeeSchema },{ name: Company.name, schema: CompanySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, LogInterceptor, EmployeesService,EmployeePdfGenerator,CompanyService],
})
export class TransactionsModule {}
