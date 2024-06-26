import { Test, TestingModule } from '@nestjs/testing';
import { ImmgcardController } from './immgcard.controller';
import { ImmgcardService } from './immgcard.service';

describe('ImmgcardController', () => {
  let controller: ImmgcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmgcardController],
      providers: [ImmgcardService],
    }).compile();

    controller = module.get<ImmgcardController>(ImmgcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
