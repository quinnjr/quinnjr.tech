import { Pipe, PipeTransform } from '@angular/core';
import { MarkdownService } from './markdown.service';
import { Options } from './options';

/**
 * Angular Pipe for transforming Markdown into HTML
 * using `pulldown-cmark`.
 *
 * Used by calling `pulldown` on the piped input.
 *
 * @export
 * @class NgxPulldownCmarkPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'pulldownCmark'
})
export class MarkdownPipe implements PipeTransform {
  constructor(
    private readonly $markdownService: MarkdownService
  ) {}
  /**
   * Transform an input string of Markdown content into HTML
   * using `pulldown-cmark`.
   *
   * @param {string} input An input string of valid Markdown content.
   * @param {any[] } args @TODO
   * @returns Markdown parsed into valid HTML.
   */
  public async transform(md: string, ..._args: Options[]): Promise<string> {
    return this.$markdownService.parse(md);
  }
}
