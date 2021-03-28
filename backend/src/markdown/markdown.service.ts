import { Injectable } from '@nestjs/common';
import { parse, ParseOptions } from 'markdown-wasm';

@Injectable()
export class MarkdownService {
  public parse(value: string, options?: (ParseOptions & {
    bytes?: false
  })): string {
    return parse(value, options);
  }
}
