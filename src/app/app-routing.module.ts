import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { AdminLoadGuard } from './admin-load.guard';
import { ArticleComponent } from './articles/article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
