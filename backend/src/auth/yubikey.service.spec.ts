import { Test, TestingModule } from '@nestjs/testing';
import { YubikeyService } from './yubikey.service';

describe('YubikeyService', () => {
  let service: YubikeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YubikeyService],
    }).compile();

    service = module.get<YubikeyService>(YubikeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
