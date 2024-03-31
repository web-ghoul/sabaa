import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
@Module({
  imports: [AuthModule,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]) ,JwtModule.registerAsync({
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
