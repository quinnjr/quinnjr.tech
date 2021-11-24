import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ResumeComponent, SidebarComponent]
})
export class ResumeModule {}
