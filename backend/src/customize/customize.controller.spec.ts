import { Test, TestingModule } from '@nestjs/testing';
import { CustomizeController } from './customize.controller';
import { CustomizeService } from './customize.service';

describe('CustomizeController', () => {
  let controller: CustomizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomizeController],
      providers: [CustomizeService],
    }).compile();

    controller = module.get<CustomizeController>(CustomizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
