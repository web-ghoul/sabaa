import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityLog, ActivityLogSchema } from 'schemas/activityLog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ActivityLog.name, schema: ActivityLogSchema }])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  exports: [ActivitiesService,MongooseModule.forFeature([{ name: ActivityLog.name, schema: ActivityLogSchema }])],
})
export class ActivitiesModule {}
