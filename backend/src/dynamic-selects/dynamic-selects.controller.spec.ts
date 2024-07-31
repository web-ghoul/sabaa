import { Test, TestingModule } from '@nestjs/testing';
import { DynamicSelectsController } from './dynamic-selects.controller';
import { DynamicSelectsService } from './dynamic-selects.service';

describe('DynamicSelectsController', () => {
  let controller: DynamicSelectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicSelectsController],
      providers: [DynamicSelectsService],
    }).compile();

    controller = module.get<DynamicSelectsController>(DynamicSelectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
