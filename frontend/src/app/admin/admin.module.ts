import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { AdminRoutingModule } from './admin-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { UserService } from '../user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ControlsComponent } from './controls/controls.component';
import { AccountComponent } from './account/account.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { UpdateResumeComponent } from './update-resume/update-resume.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ArticlesComponent,
    ProjectsComponent,
    ResumeComponent,
    AdminComponent,
    CreateArticleComponent,
    ControlsComponent,
    AccountComponent,
    ManageArticlesComponent,
    UpdateResumeComponent,
    ManageProjectsComponent,
    CreateProjectComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule {}
