import { Test, TestingModule } from '@nestjs/testing';
import { RecipeTypesService } from './recipe-types.service';

describe('RecipeTypesService', () => {
  let service: RecipeTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeTypesService],
    }).compile();

    service = module.get<RecipeTypesService>(RecipeTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
