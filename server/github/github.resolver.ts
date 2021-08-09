import { Resolver, Query } from '@nestjs/graphql';
import { Public } from '../auth/public.decorator';
import { GithubResponse } from './dto/github-response';
import { gql } from 'apollo-server-core';

@Resolver((of: any) => GithubResponse)
export class GithubResolver {
  constructor() {}

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

    return {
      url: '',
      gists: [],
      repositories: []
    };
  }
}
