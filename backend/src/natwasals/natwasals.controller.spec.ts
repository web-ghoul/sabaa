import { Test, TestingModule } from '@nestjs/testing';
import { NatwasalsController } from './natwasals.controller';
import { NatwasalsService } from './natwasals.service';

describe('NatwasalsController', () => {
  let controller: NatwasalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NatwasalsController],
      providers: [NatwasalsService],
    }).compile();

    controller = module.get<NatwasalsController>(NatwasalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
