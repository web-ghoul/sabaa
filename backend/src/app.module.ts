import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { TasheelModule } from './tasheel/tasheel.module';
import { WorkPermitModule } from './work-permit/work-permit.module';
import { TransactionModule } from './transaction/transaction.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { OwnerModule } from './owner/owner.module';
import { AuthGuard } from './auth/auth.guard';
import { NationalityModule } from './nationality/nationality.module';
import { JobTitleModule } from './job-title/job-title.module';
import { CompanyModule } from './company/company.module';
import { ImmgcardModule } from './immgcard/immgcard.module';
import { User } from 'schemas/user.schema';
import { UserSchema } from 'schemas/resetOtp.schema';

dotenv.config();
@Module({
  imports: [UserModule, EmployeeModule, TasheelModule, WorkPermitModule, TransactionModule, CompanyModule, OwnerModule, NationalityModule,MongooseModule.forRoot(process.env.DB_CONN_LOCAL),MongooseModule.forFeature([{name:User.name,schema:UserSchema}]), AuthModule,ThrottlerModule.forRoot([{
    ttl: 20000,
    limit: 100,
  }]), JobTitleModule, ImmgcardModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }],
})
export class AppModule {}
