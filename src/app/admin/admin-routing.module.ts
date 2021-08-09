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
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'site',
        component: ControlsComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'create-article',
        component: CreateArticleComponent
      },
      {
        path: 'manage-articles',
        component: ManageArticlesComponent
      },
      {
        path: 'manage-projects',
        component: ManageProjectsComponent
      },
      {
        path: 'update-resume',
        component: UpdateResumeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/site'
      }
    ]
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes.toArray())],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
