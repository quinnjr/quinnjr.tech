import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { Set } from 'immutable';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';

const routes: Set<Route> = Set([
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '_login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module')
      .then(m => m.ArticlesModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module')
      .then(m => m.ResumeModule)
  },
  {
    path: '_admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
]);

@NgModule({
  imports: [
    RouterModule.forRoot(routes.toArray(), {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
