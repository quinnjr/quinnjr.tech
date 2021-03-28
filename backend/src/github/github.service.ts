import { CACHE_MANAGER, HttpService, Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubResponse } from './dto/github-response';

@Injectable()
export class GithubService {
  private GITHUB_API: string = 'https://api.github.com/graphql';

  constructor(
    private readonly $configService: ConfigService,
    private readonly $httpService: HttpService,
    @Inject(CACHE_MANAGER) private readonly $cacheService: Cache
  ) {}

  public request(query: string): Promise<GithubResponse> {
    return new Promise(async (resolve: any, reject: any) => {
      let response = await this.$cacheService.get('github_response');
      if(!response) {
        this.$httpService.post(this.GITHUB_API, {
          query: query
        }, {
          headers: {
            Authorization: `bearer ${ this.$configService.get<string>('GH_TOKEN') }`
          }
        })
          .pipe(
            map((res) => {
              const data = res.data;
              if(data.errors) {
                throwError(data.errors);
              }

              let val = {};

              Object.defineProperty(val, 'url', {
                value: data.url,
                enumerable: true
              });

              Object.defineProperty(val, 'gists', {
                value: data.gists.edges.map(v => (v.node)),
                enumerable: true
              });

              Object.defineProperty(val, 'repositories', {
                value: data.repositories.edges.map(v => (v.node)),
                enumerable: true
              });

              return val;
            }),
          )
          .subscribe(
            (res) => {
              this.$cacheService.set('github_response', res, { ttl: 36000 });
              resolve(res);
            },
            reject);
      } else {
        resolve(response);
      }
    })
  }
}
