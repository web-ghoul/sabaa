import { Module } from '@nestjs/common';
import { TasheelsService } from './tasheels.service';
import { TasheelsController } from './tasheels.controller';

@Module({
  controllers: [TasheelsController],
  providers: [TasheelsService],
})
export class TasheelsModule {}
