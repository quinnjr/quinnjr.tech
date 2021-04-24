import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
