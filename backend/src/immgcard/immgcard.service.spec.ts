import { Test, TestingModule } from '@nestjs/testing';
import { ImmgcardService } from './immgcard.service';

describe('ImmgcardService', () => {
  let service: ImmgcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmgcardService],
    }).compile();

    service = module.get<ImmgcardService>(ImmgcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
