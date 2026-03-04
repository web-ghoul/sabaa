import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from '../schemas/employee.schema';
import { Company, CompanySchema } from '../schemas/company.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLog } from '../utils/interceptors/logAcitivities.decorator';
import { ActivityLogSchema } from '../schemas/activityLog.schema';
import { EmployeePdfGenerator } from './pdfGenerators/EmployeePdfMaker';
import { EChannelSchema } from '../schemas/eChannel.schema';
import { Tasaheel, TasaheelSchema } from '../schemas/tasaheel.schema';
import { Natwasal, NatwasalSchema } from '../schemas/natwasal.schema';
import { TransactionSchema } from '../schemas/transaction.schema';
import { memoryStorage } from 'multer';
import { CloudinaryModule } from '../utils/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Transaction', schema: EChannelSchema },
      { name: 'EChannel', schema: TransactionSchema },
      { name: Natwasal.name, schema: NatwasalSchema },
      { name: Tasaheel.name, schema: TasaheelSchema },
      { name: Employee.name, schema: EmployeeSchema },
      { name: Company.name, schema: CompanySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    CloudinaryModule,
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, LogInterceptor, EmployeePdfGenerator],
  exports: [EmployeesService, EmployeePdfGenerator],
})
export class EmployeesModule {}
