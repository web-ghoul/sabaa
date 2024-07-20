import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { AlertsController } from './alerts.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { ActivitiesModule } from 'src/activities/activities.module';
import { ActivitiesService } from 'src/activities/activities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from 'schemas/transaction.schema';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';
import { ActivityLogSchema } from 'schemas/activityLog.schema';

@Module({
  imports: [ScheduleModule.forRoot(), ActivitiesModule, MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema },{ name: ActivityLog.name, schema: ActivityLogSchema }])],
  controllers: [AlertsController],
  providers: [AlertsService, ActivitiesService],
})
export class AlertsModule {}
