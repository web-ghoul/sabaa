import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { AlertsController } from './alerts.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { ActivitiesModule } from 'src/activities/activities.module';
import { ActivitiesService } from 'src/activities/activities.service';

@Module({
  imports: [ScheduleModule.forRoot(), ActivitiesModule],
  controllers: [AlertsController],
  providers: [AlertsService, ActivitiesService],
})
export class AlertsModule {}
