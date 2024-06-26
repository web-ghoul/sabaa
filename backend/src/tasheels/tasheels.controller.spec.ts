import { Test, TestingModule } from '@nestjs/testing';
import { TasheelsController } from './tasheels.controller';
import { TasheelsService } from './tasheels.service';

describe('TasheelsController', () => {
  let controller: TasheelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasheelsController],
      providers: [TasheelsService],
    }).compile();

    controller = module.get<TasheelsController>(TasheelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
