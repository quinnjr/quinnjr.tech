import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { AdminRoutingModule } from './admin-routing.module';
import { UserService } from '../user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ControlsComponent } from './controls/controls.component';
import { AccountComponent } from './account/account.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { UpdateResumeComponent } from './update-resume/update-resume.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AccountComponent,
    ControlsComponent,
    CreateArticleComponent,
    ManageArticlesComponent,
    ManageProjectsComponent,
    UpdateResumeComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule {}
