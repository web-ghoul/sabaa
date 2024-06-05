import { Test, TestingModule } from '@nestjs/testing';
import { NatwasalsService } from './natwasals.service';

describe('NatwasalsService', () => {
  let service: NatwasalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NatwasalsService],
    }).compile();

    service = module.get<NatwasalsService>(NatwasalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
