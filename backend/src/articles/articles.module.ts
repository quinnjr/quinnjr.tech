import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';

import { ArticlesResolver } from './articles.resolver';
import { ArticlesService } from './articles.service';

@Module({
  imports: [
    DatabaseModule,
    UsersModule
  ],
  providers: [
    ArticlesResolver,
    ArticlesService
  ]
})
export class ArticlesModule {
}
