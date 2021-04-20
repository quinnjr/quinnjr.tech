import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { AdminRoutingModule } from './admin-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    AdminRoutingModule
  ],
  declarations: [
    ArticlesComponent,
    ProjectsComponent,
    ResumeComponent
  ]
})
export class AdminModule {}
