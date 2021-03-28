import { Injectable } from '@angular/core';
import { Options } from './options';

@Injectable()
export class MarkdownService {
  private instance: any;

  public parse(markdown: string, ..._args: Options[]): string {
    let mod;
    import('./pulldown_cmark_pipe')
      .then(m => mod = m);

    return "";
  }
}
