import { Module } from '@nestjs/common';
import { CustomizeService } from './customize.service';
import { CustomizeController } from './customize.controller';
import { MulterModule } from '@nestjs/platform-express';

import { memoryStorage } from 'multer';
import { CloudinaryModule } from '../utils/cloudinary/cloudinary.module';

@Module({
  imports: [
    MulterModule.register({
      storage: memoryStorage(),
    }),
    CloudinaryModule,
  ],
  controllers: [CustomizeController],
  providers: [CustomizeService],
})
export class CustomizeModule {}
