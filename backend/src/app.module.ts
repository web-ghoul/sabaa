import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import * as dotenv from 'dotenv';
import { OwnerSchema } from './schemas/owner.schema';
import { User, UserSchema } from './schemas/user.schema';
import { ActivitiesModule } from './activities/activities.module';
import { AlertsModule } from './alerts/alerts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { CustomizeModule } from './customize/customize.module';
import { DynamicSelectsModule } from './dynamic-selects/dynamic-selects.module';
import { EChannelModule } from './e-channel/e-channel.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomErrorFilter } from './filters/CustomErrorFilter';
import { ImmgcardModule } from './immgcard/immgcard.module';
import { JobTitleModule } from './job-title/job-title.module';
import { MailsModule } from './mails/mails.module';
import { NationalityModule } from './nationality/nationality.module';
import { NatwasalsModule } from './natwasals/natwasals.module';
import { OwnerModule } from './owner/owner.module';
import { PermissionModule } from './permission/permission.module';
import { ReportsModule } from './reports/reports.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { TasheelsModule } from './tasheels/tasheels.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UserModule } from './user/user.module';
import { WorkPermitModule } from './work-permit/work-permit.module';

dotenv.config();
@Module({
  imports: [
    UserModule,
    WorkPermitModule,
    CompanyModule,
    OwnerModule,
    NationalityModule,
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule,
    ThrottlerModule.forRoot([
      {
        ttl: 20000,
        limit: 100,
      },
    ]),
    JobTitleModule,
    ImmgcardModule,
    EmployeesModule,
    ActivitiesModule,
    MailsModule,
    MongooseModule.forFeature([{ name: 'Owner', schema: OwnerSchema }]),
    SponsorsModule,
    EChannelModule,
    TasheelsModule,
    NatwasalsModule,
    TransactionsModule,
    AlertsModule,
    ReportsModule,
    PermissionModule,
    DynamicSelectsModule,
    CustomizeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },

    {
      provide: APP_FILTER,
      useClass: CustomErrorFilter,
    },
  ],
})
export class AppModule {}
