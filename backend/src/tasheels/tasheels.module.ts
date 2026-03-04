import { Module } from '@nestjs/common';
import { TasheelsService } from './tasheels.service';
import { TasheelsController } from './tasheels.controller';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { MongooseModule } from '@nestjs/mongoose';
import { TasaheelSchema } from '../schemas/tasaheel.schema';
import { CompanySchema } from '../schemas/company.schema';
import { OwnerSchema } from '../schemas/owner.schema';
import { ActivityLog, ActivityLogSchema } from '../schemas/activityLog.schema';
import { EmployeeSchema } from '../schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tasaheel', schema: TasaheelSchema },
      { name: 'Company', schema: CompanySchema },
      { name: 'Owner', schema: OwnerSchema },
      { name: 'Employee', schema: EmployeeSchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
  controllers: [TasheelsController],
  providers: [TasheelsService, LogInterceptor],
})
export class TasheelsModule {}
