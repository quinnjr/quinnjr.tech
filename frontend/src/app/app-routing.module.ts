declare var process: any;

import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { List } from 'immutable';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: List<Route> = List([
  {
    path: 'login',
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
    component: ArticlesComponent,
    children: [
      {
        path: ':articleSlug',
        component: ArticleComponent
      }
    ]
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module')
      .then(m => m.ResumeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    //canLoad: [AdminGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]);

@NgModule({
  imports: [
    RouterModule.forRoot(routes.toArray(), {
      enableTracing: (process.env.NODE_ENV === 'development')
    })
  ],
  providers: [
    AdminGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
