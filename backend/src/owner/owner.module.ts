import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from '../schemas/owner.schema';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import { Company, CompanySchema } from '../schemas/company.schema';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLog, ActivityLogSchema } from '../schemas/activityLog.schema';
import { EChannelSchema } from '../schemas/eChannel.schema';
import { Natwasal, NatwasalSchema } from '../schemas/natwasal.schema';
import { Tasaheel, TasaheelSchema } from '../schemas/tasaheel.schema';

import { memoryStorage } from 'multer';
import { CloudinaryModule } from '../utils/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'EChannel', schema: EChannelSchema },
      { name: Natwasal.name, schema: NatwasalSchema },
      { name: Tasaheel.name, schema: TasaheelSchema },
      { name: Owner.name, schema: OwnerSchema },
      { name: Company.name, schema: CompanySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    CloudinaryModule,
  ],
  controllers: [OwnerController],
  providers: [OwnerService, LogInterceptor],
})
export class OwnerModule {}
