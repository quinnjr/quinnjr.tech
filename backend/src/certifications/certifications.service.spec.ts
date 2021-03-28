import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { CertificationsService } from './certifications.service';

describe('CertificationsService', () => {
  let service: CertificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      providers: [
        CertificationsService
      ],
    }).compile();

    service = module.get<CertificationsService>(CertificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
