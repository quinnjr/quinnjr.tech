import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { Set } from 'immutable';

import { ResumeComponent } from './resume.component';

const routes: Set<Route> = Set([
  {
    path: '',
    component: ResumeComponent
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes.toArray())],
  exports: [RouterModule]
})
export class ResumeRoutingModule {}
