import { Module } from '@nestjs/common';
import { EChannelService } from './e-channel.service';
import { EChannelController } from './e-channel.controller';

@Module({
  controllers: [EChannelController],
  providers: [EChannelService],
})
export class EChannelModule {}
