import { Test, TestingModule } from '@nestjs/testing';
import { EChannelService } from './e-channel.service';

describe('EChannelService', () => {
  let service: EChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EChannelService],
    }).compile();

    service = module.get<EChannelService>(EChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
