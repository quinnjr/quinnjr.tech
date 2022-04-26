/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { default as axios } from 'axios'

import { Public } from '../auth/public.decorator';
import { GithubResponse } from './dto/github-response';

@Resolver((of: any) => GithubResponse)
export class GithubResolver {
  constructor(
    private readonly $configService: ConfigService
  ) {}

  @Public()
  @Query((returns) => GithubResponse)
  public async getGithubInformation(
    @Args('limit', { type: () => Int, nullable: true}) limit: number = 10
  ): Promise<GithubResponse> {
    const query = `
      query {
        viewer {
          url
          repositories(
            first: ${limit},
            orderBy: { field: UPDATED_AT, direction: DESC }
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

    const response  = await axios.post('https://api.github.com/graphql', {
      query,
    }, {
        headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `bearer ${this.$configService.get<string>('GH_TOKEN')}`
      }
    });

    const ghResponse = new GithubResponse(response.data.data);

    return ghResponse;
  }
}
