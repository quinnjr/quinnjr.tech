import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from './markdown.pipe';
import { MarkdownService } from './markdown.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarkdownPipe
  ],
  providers: [
    MarkdownService
  ],
  exports: [
    MarkdownPipe
  ]
})
export class MarkdownModule {}
