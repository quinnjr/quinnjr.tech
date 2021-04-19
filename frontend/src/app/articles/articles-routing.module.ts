import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { Set } from 'immutable';

import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article/article.component';

const routes: Set<Route> = Set([
  {
    path: '',
    component: ArticlesComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: ArticleComponent
  }
]);

@NgModule({
  imports: [
    RouterModule.forChild(routes.toArray())
  ],
  exports: [
    RouterModule
  ]
})
export class ArticlesRoutingModule {}
