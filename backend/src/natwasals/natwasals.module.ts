import { Module } from '@nestjs/common';
import { NatwasalsService } from './natwasals.service';
import { NatwasalsController } from './natwasals.controller';

@Module({
  controllers: [NatwasalsController],
  providers: [NatwasalsService],
})
export class NatwasalsModule {}
