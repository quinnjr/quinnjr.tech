import { Article } from './article';

describe('Post', () => {
  let article;

  beforeAll(() => {
    article = new Article();
  });

  it('should be defined', () => {
    expect(article).toBeDefined();
  });
});
