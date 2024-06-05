import { Test, TestingModule } from '@nestjs/testing';
import { TasheelsService } from './tasheels.service';

describe('TasheelsService', () => {
  let service: TasheelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasheelsService],
    }).compile();

    service = module.get<TasheelsService>(TasheelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
