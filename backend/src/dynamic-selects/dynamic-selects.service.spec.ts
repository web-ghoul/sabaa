import { Test, TestingModule } from '@nestjs/testing';
import { DynamicSelectsService } from './dynamic-selects.service';

describe('DynamicSelectsService', () => {
  let service: DynamicSelectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicSelectsService],
    }).compile();

    service = module.get<DynamicSelectsService>(DynamicSelectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
