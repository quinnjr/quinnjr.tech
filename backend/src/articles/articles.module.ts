import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';

import { ArticlesResolver } from './articles.resolver';

@Module({
  imports: [
    DatabaseModule,
    UsersModule
  ],
  providers: [
    ArticlesResolver
  ]
})
export class ArticlesModule {
}
