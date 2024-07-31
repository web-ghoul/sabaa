import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from 'schemas/company.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { LogInterceptor } from 'src/utils/interceptors/logActivities.interceptor';
import { ActivityLogSchema } from 'schemas/activityLog.schema';
import { ActivityLog } from 'src/utils/interceptors/logAcitivities.decorator';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }, { name: ActivityLog.name, schema: ActivityLogSchema }]),MulterModule.register({
    storage: diskStorage({
      destination: './upload/company',
      filename: (req, file, cb) => {
        // Generate a unique suffix
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Construct the filename using the original fieldname and unique suffix
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      },
    }),
  }),],
 
  controllers: [CompanyController],
  providers: [CompanyService,LogInterceptor],
  exports: [CompanyService,MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }, { name: ActivityLog.name, schema: ActivityLogSchema }])]
})
export class CompanyModule {}
