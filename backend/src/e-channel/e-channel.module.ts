import { Module } from '@nestjs/common';
import { EChannelService } from './e-channel.service';
import { EChannelController } from './e-channel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EChannelSchema } from '../schemas/eChannel.schema';

import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { ActivityLogSchema } from '../schemas/activityLog.schema';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { Employee, EmployeeSchema } from '../schemas/employee.schema';
import { Owner, OwnerSchema } from '../schemas/owner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'EChannel', schema: EChannelSchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
      { name: Employee.name, schema: EmployeeSchema },
      { name: Owner.name, schema: OwnerSchema },
    ]),
  ],
  controllers: [EChannelController],
  providers: [EChannelService, LogInterceptor],
})
export class EChannelModule {}
