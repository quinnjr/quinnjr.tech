import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccountComponent } from './account/account.component';
import { ControlsComponent } from './controls/controls.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { UpdateResumeComponent } from './update-resume/update-resume.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AccountComponent,
    ControlsComponent,
    CreateArticleComponent,
    ManageArticlesComponent,
    ManageProjectsComponent,
    UpdateResumeComponent,
    AdminComponent
  ],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
