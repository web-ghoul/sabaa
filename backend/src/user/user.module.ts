import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { UserService } from './user.service';

import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { ActivityLog, ActivityLogSchema } from 'schemas/activityLog.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{ name: ActivityLog.name, schema: ActivityLogSchema }]) ,JwtModule.registerAsync({
    useFactory: async () => ({
      secret: process.env.Secret_Password,
      signOptions: { expiresIn: '1d' },
    }),
  }),
  MulterModule.register({
    storage: diskStorage({
      destination: './upload/user',
      filename: (req, file, cb) => {
        // Generate a unique suffix
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Construct the filename using the original fieldname and unique suffix
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      },
    }),
  }),],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
