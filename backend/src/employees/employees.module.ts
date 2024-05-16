import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'schemas/employee.schema';
import { Company, CompanySchema } from 'schemas/company.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { ActivityLogSchema } from 'schemas/activityLog.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema },{ name: Company.name, schema: CompanySchema },{ name: ActivityLog.name, schema: ActivityLogSchema }]),MulterModule.register({
    storage: diskStorage({
      destination: './upload/employee&customer',
      filename: (req, file, cb) => {
        // Generate a unique suffix
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Construct the filename using the original fieldname and unique suffix
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      },
    }),
  })],
  controllers: [EmployeesController],
  providers: [EmployeesService,LogInterceptor],
})
export class EmployeesModule {}
