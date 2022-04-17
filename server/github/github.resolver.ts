/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { gql } from 'apollo-server-core';
import { Observable, of as observableOf } from 'rxjs';

import { Public } from '../auth/public.decorator';
import { GithubResponse } from './dto/github-response';

@Resolver((of: any) => GithubResponse)
export class GithubResolver {
  constructor(
    private readonly $httpService: HttpService,
    private readonly $configService: ConfigService
  ) {}

  @Public()
  @Query((returns) => GithubResponse, { name: 'github' })
  public getGithubInformation(
    @Args('limit', { type: () => Int, nullable: false}) limit: number
  ): Observable<GithubResponse> {
    const query = gql`
      {
        viewer {
          url
          repositories(
            first: ${limit},
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

    return this.$httpService.request({
      method: 'post',
      url: 'https://api.github.com/graphql',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `bearer ${this.$configService.get<string>('GH_TOKEN')}`
      },
      data: query
    }) as unknown as Observable<GithubResponse>;
  }
}
