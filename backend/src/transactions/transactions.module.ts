import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { ActivityLogSchema } from '../schemas/activityLog.schema';
import { ActivityLog } from '../utils/interceptors/logAcitivities.decorator';
import { EmployeeSchema } from '../schemas/employee.schema';
import { TransactionSchema } from '../schemas/transaction.schema';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { EmployeesService } from '../employees/employees.service';
import { EChannelSchema } from '../schemas/eChannel.schema';
import { Natwasal, NatwasalSchema } from '../schemas/natwasal.schema';
import { Tasaheel, TasaheelSchema } from '../schemas/tasaheel.schema';
import { Company, CompanySchema } from '../schemas/company.schema';
import { EmployeesModule } from '../employees/employees.module';
import { EmployeePdfGenerator } from '../employees/pdfGenerators/EmployeePdfMaker';
import { CompanyService } from '../company/company.service';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [
    EmployeesModule,
    CompanyModule,
    MongooseModule.forFeature([
      { name: 'EChannel', schema: EChannelSchema },
      { name: Natwasal.name, schema: NatwasalSchema },
      { name: Tasaheel.name, schema: TasaheelSchema },
      { name: 'Transaction', schema: TransactionSchema },
      { name: 'Employee', schema: EmployeeSchema },
      { name: Company.name, schema: CompanySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, LogInterceptor],
})
export class TransactionsModule {}
