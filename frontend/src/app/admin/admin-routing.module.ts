import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { Set } from 'immutable';

import { ProfileComponent } from './profile/profile.component';

const routes: Set<Route> = Set([
  {
    path: '',
    redirectTo: './profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]);

@NgModule({
  imports: [
    RouterModule.forChild(routes.toArray())
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
