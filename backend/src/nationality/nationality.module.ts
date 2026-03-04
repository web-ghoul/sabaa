import { Module } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { NationalityController } from './nationality.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nationality, NationalitySchema } from '../schemas/nationality.schema';
import { LogInterceptor } from '../utils/interceptors/logActivities.interceptor';
import { ActivityLogSchema } from '../schemas/activityLog.schema';
import { ActivityLog } from '../utils/interceptors/logAcitivities.decorator';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Nationality.name, schema: NationalitySchema },
      { name: ActivityLog.name, schema: ActivityLogSchema },
    ]),
  ],
  controllers: [NationalityController],
  providers: [NationalityService, LogInterceptor],
})
export class NationalityModule {}
