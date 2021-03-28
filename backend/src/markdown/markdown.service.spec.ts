import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownService } from './markdown.service';

describe('MarkdownService', () => {
  let service: MarkdownService;

  const input = '# I am a title\n**I am bold**'
  const expected = '<h1><a id="i-am-a-title" class="anchor" aria-hidden="true" href="#i-am-a-title"></a>I am a title</h1>\n<p><b>I am bold</b></p>\n';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkdownService],
    }).compile();

    service = module.get<MarkdownService>(MarkdownService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should properly convert markdown to html', () => {
    const result = service.parse(input);
    expect(result).toBe(expected);
  });
});
