import { Module } from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import { JobTitleController } from './job-title.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobTitle, JobTitleSchema } from '../schemas/jobTitle.schema';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { ActivityLogSchema } from '../schemas/activityLog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobTitle.name, schema: JobTitleSchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
  controllers: [JobTitleController],
  providers: [JobTitleService, LogInterceptor],
})
export class JobTitleModule {}
