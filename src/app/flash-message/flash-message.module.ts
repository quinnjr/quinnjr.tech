import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashMessageComponent } from './flash-message.component';
import { FlashMessageService } from './flash-message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlashMessageComponent
  ],
  providers: [
    FlashMessageService
  ],
  exports: [
    FlashMessageComponent
  ]
})
export class FlashMessageModule {}
