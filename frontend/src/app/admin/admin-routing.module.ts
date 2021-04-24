import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { List } from 'immutable';

import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin.component';
import { ControlsComponent } from './controls/controls.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { UpdateResumeComponent } from './update-resume/update-resume.component';

const routes: List<Route> = List([
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
        outlet: 'adminContent'
      },
      {
        path: 'create-article',
        component: CreateArticleComponent,
        outlet: 'adminContent'
      },
      {
        path: 'manage-articles',
        component: ManageArticlesComponent,
        outlet: 'adminContent'
      },
      {
        path: 'manage-projects',
        component: ManageProjectsComponent,
        outlet: 'adminContent'
      },
      {
        path: 'update-resume',
        component: UpdateResumeComponent,
        outlet: 'adminContent'
      },
      {
        path: '',
        pathMatch: 'full',
        component: ControlsComponent,
        outlet: 'adminContent'
      }
    ]
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
export class AdminRoutingModule {}
