import { Test, TestingModule } from '@nestjs/testing';
import { SoupTypeService } from './soup-type.service';

describe('SoupTypeService', () => {
  let service: SoupTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoupTypeService],
    }).compile();

    service = module.get<SoupTypeService>(SoupTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
