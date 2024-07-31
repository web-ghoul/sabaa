import { Module } from '@nestjs/common';
import { DynamicSelectsService } from './dynamic-selects.service';
import { DynamicSelectsController } from './dynamic-selects.controller';

@Module({
  controllers: [DynamicSelectsController],
  providers: [DynamicSelectsService],
})
export class DynamicSelectsModule {}
