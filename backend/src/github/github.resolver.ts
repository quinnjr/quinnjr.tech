import { Resolver, Query } from '@nestjs/graphql';
import { Public } from 'src/auth/public.decorator';
import { GithubResponse } from './dto/github-response';
import { GithubService } from './github.service';

@Resolver(of => GithubResponse)
export class GithubResolver {
  constructor(
    private readonly $ghService: GithubService
  ) {}

  @Public()
  @Query(returns => GithubResponse, { name: 'github' })
  public async getGithubInformation(): Promise<GithubResponse> {
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
    return this.$ghService.request(query);
  }

}
