import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { DatabaseModule } from '../database/database.module';
import { CertificationsResolver } from './certifications.resolver';
import { CertificationsService } from './certifications.service';

@Module({
  imports: [
    DatabaseModule,
    UsersModule
  ],
  providers: [
    CertificationsResolver,
    CertificationsService
  ]
})
export class CertificationsModule {}
