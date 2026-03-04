import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from '../schemas/company.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLogSchema } from '../schemas/activityLog.schema';
import { ActivityLog } from '../utils/interceptors/logAcitivities.decorator';

import { memoryStorage } from 'multer';
import { CloudinaryModule } from '../utils/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    CloudinaryModule,
  ],

  controllers: [CompanyController],
  providers: [CompanyService, LogInterceptor],
  exports: [
    CompanyService,
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
})
export class CompanyModule {}
