import { Test, TestingModule } from '@nestjs/testing';
import { EChannelController } from './e-channel.controller';
import { EChannelService } from './e-channel.service';

describe('EChannelController', () => {
  let controller: EChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EChannelController],
      providers: [EChannelService],
    }).compile();

    controller = module.get<EChannelController>(EChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
