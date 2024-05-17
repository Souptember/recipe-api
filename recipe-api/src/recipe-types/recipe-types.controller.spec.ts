import { Test, TestingModule } from '@nestjs/testing';
import { RecipeTypesController } from './recipe-types.controller';
import { RecipeTypesService } from './recipe-types.service';

describe('RecipeTypesController', () => {
  let controller: RecipeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeTypesController],
      providers: [RecipeTypesService],
    }).compile();

    controller = module.get<RecipeTypesController>(RecipeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
