import { Test, TestingModule } from '@nestjs/testing';
import { AdherentController } from './adherent.controller';

describe('Adherent Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AdherentController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AdherentController = module.get<AdherentController>(AdherentController);
    expect(controller).toBeDefined();
  });
});
