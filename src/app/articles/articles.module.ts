import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticlesComponent, ArticleComponent],
  imports: [CommonModule, ArticlesRoutingModule]
})
export class ArticlesModule {}
