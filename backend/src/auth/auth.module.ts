import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
  JwtModule.register({
    global: true,
    secret : process.env.Secret_Password,
    signOptions: { expiresIn: '1d' },
  })
],
  controllers: [AuthController],
  providers: [AuthService,AuthGuard],
  exports:[AuthGuard]
})
export class AuthModule {}
