import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ExperiencesResolver } from './experiences.resolver';
import { ExperiencesService } from './experiences.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    ExperiencesResolver,
    ExperiencesService
  ]
})
export class ExperiencesModule {}
