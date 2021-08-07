import { Resolver, Query } from '@nestjs/graphql';
import { Public } from '../auth/public.decorator';
import { GithubResponse } from './dto/github-response';
import { GithubService } from './github.service';
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';

@Resolver((of: any) => GithubResponse)
export class GithubResolver {
  private client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.github.com/graphql'
  });

  constructor(private readonly $ghService: GithubService) {}

  @Public()
  @Query((returns) => GithubResponse, { name: 'github' })
  public async getGithubInformation(): Promise<GithubResponse> {
    /* eslint prettier/prettier: off */
    const query = gql`
      {
        viewer {
          url
          gists(first: 10, privacy: PUBLIC) {
            egdges {
              node {
                id
                description
                name
                url
              }
            }
          }
          repositories(
            first: 10,
            orderBy: { field: CREATED_AT },
            direction: DESC
          ) {
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

    return this.client.query({
      query
    })
      .then((res: any) => {
        return {
          url: res.url,
          gists: res.gists.map((v: any) => v.node),
          repositories: res.gists.map((v: any) => v.node)
        } as GithubResponse;
      });
  }
}
