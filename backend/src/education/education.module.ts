import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EducationResolver } from './education.resolver';
import { EducationService } from './education.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    EducationResolver,
    EducationService
  ]
})
export class EducationModule {}
