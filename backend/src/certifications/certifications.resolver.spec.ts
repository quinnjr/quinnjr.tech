import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';
import { DatabaseModule } from '../database/database.module';
import { CertificationsResolver } from './certifications.resolver';
import { CertificationsService } from './certifications.service';

describe('CertificationsResolver', () => {
  let resolver: CertificationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      providers: [
        CertificationsResolver,
        CertificationsService,
        UsersService
      ],
    }).compile();

    resolver = module.get<CertificationsResolver>(CertificationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
