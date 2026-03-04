import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { SponsorsController } from './sponsors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sponsor, SponsorSchema } from '../schemas/sponsor.schema';
import { Owner, OwnerSchema } from '../schemas/owner.schema';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLog, ActivityLogSchema } from '../schemas/activityLog.schema';
import { Employee, EmployeeSchema } from '../schemas/employee.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

import { memoryStorage } from 'multer';
import { CloudinaryModule } from '../utils/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sponsor.name, schema: SponsorSchema },
      { name: Owner.name, schema: OwnerSchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
      { name: Employee.name, schema: EmployeeSchema },
    ]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    CloudinaryModule,
  ],
  controllers: [SponsorsController],
  providers: [SponsorsService, LogInterceptor],
})
export class SponsorsModule {}
