import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    ProjectsResolver,
    ProjectsService
  ]
})
export class ProjectsModule {}
