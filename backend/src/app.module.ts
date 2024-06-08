import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorkPermitModule } from './work-permit/work-permit.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { OwnerModule } from './owner/owner.module';
import { AuthGuard } from './auth/auth.guard';
import { NationalityModule } from './nationality/nationality.module';
import { JobTitleModule } from './job-title/job-title.module';
import { CompanyModule } from './company/company.module';
import { ImmgcardModule } from './immgcard/immgcard.module';
import { User, UserSchema } from 'schemas/user.schema';
import { EmployeesModule } from './employees/employees.module';
import { ActivitiesModule } from './activities/activities.module';
import { MailsModule } from './mails/mails.module';
import { OwnerSchema } from 'schemas/owner.schema';
import { CustomErrorFilter } from './filters/CustomErrorFilter';
import { SponsorsModule } from './sponsors/sponsors.module';
import { EChannelModule } from './e-channel/e-channel.module';
import { TasheelsModule } from './tasheels/tasheels.module';
import { NatwasalsModule } from './natwasals/natwasals.module';
import { TransactionsModule } from './transactions/transactions.module';

dotenv.config();
@Module({
  imports: [UserModule, WorkPermitModule, CompanyModule, OwnerModule, NationalityModule,MongooseModule.forRoot(process.env.DB_CONN_LOCAL),MongooseModule.forFeature([{name:User.name,schema:UserSchema}]), AuthModule,ThrottlerModule.forRoot([{
    ttl: 20000,
    limit: 100,
  },
  
]), JobTitleModule, ImmgcardModule, EmployeesModule, ActivitiesModule,
MailsModule,MongooseModule.forFeature([{ name: 'Owner', schema: OwnerSchema }]), SponsorsModule, EChannelModule, TasheelsModule, NatwasalsModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: MongooseModule
    },
    {
      provide: APP_FILTER,
      useClass: CustomErrorFilter,
    },],
})
export class AppModule {}
