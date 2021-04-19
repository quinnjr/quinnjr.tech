import { Controller, Get } from '@nestjs/common';

import { GithubService } from './github.service';
import { GithubResponse } from './dto/github-response';
import { Public } from '../auth/public.decorator';

@Controller('github')
export class GithubController {
  constructor(
    private readonly $ghService: GithubService
  ) {}

  @Public()
  @Get()
  public async github(): Promise<GithubResponse> {
    const query = `
      {
        viewer {
          url
          gists(first: 10, privacy: PUBLIC) {
            edges {
              node {
                id
                description
                name
                url
              }
            }
          }
          repositories(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                description
                name
                url
              }
            }
          }
        }
      }
    `;

    return await this.$ghService.request(query);
  }
}
