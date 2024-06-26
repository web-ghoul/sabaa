import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { SponsorsController } from './sponsors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sponsor, SponsorSchema } from 'schemas/sponsor.schema';
import { Owner, OwnerSchema } from 'schemas/owner.schema';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog, ActivityLogSchema } from 'schemas/activityLog.schema';
import { Employee, EmployeeSchema } from 'schemas/employee.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sponsor.name, schema: SponsorSchema },{ name: Owner.name, schema: OwnerSchema },{ name: ActivityLog.name, schema: ActivityLogSchema },{ name: Employee.name, schema: EmployeeSchema }]),
  MulterModule.register({
    storage: diskStorage({
      destination: './upload/sponsor',
      filename: (req, file, cb) => {
        // Generate a unique suffix
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Construct the filename using the original fieldname and unique suffix
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      },
    }),
  }),],
  controllers: [SponsorsController],
  providers: [SponsorsService,LogInterceptor],
})
export class SponsorsModule {}
