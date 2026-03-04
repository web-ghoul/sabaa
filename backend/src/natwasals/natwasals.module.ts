import { Module } from '@nestjs/common';
import { NatwasalsService } from './natwasals.service';
import { NatwasalsController } from './natwasals.controller';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from '../schemas/company.schema';
import { OwnerSchema } from '../schemas/owner.schema';
import { ActivityLog, ActivityLogSchema } from '../schemas/activityLog.schema';
import { EmployeeSchema } from '../schemas/employee.schema';
import { NatwasalSchema } from '../schemas/natwasal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Natwasal', schema: NatwasalSchema },
      { name: 'Company', schema: CompanySchema },
      { name: 'Owner', schema: OwnerSchema },
      { name: 'Employee', schema: EmployeeSchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
  controllers: [NatwasalsController],
  providers: [NatwasalsService, LogInterceptor],
})
export class NatwasalsModule {}
