import { Module } from '@nestjs/common';
import { CustomizeService } from './customize.service';
import { CustomizeController } from './customize.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: './upload/customize',
      filename: (req, file, cb) => {
        // Generate a unique suffix
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Construct the filename using the original fieldname and unique suffix
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      },
    }),
  }),],
  controllers: [CustomizeController],
  providers: [CustomizeService],
})
export class CustomizeModule {}
