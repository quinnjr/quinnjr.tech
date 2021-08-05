import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule as NgxLoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { LoadingBarComponent } from './loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
    NgxLoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
  ],
  declarations: [
    LoadingBarComponent
  ],
  exports: [
    LoadingBarComponent
  ]
})
export class LoadingBarModule { }
