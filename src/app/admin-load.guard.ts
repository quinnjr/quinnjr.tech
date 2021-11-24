declare const process: any;

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminLoadGuard implements CanLoad {
  constructor(
    private readonly $httpClient: HttpClient,
    private readonly $router: Router
  ) {}

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> {
    return this.$httpClient
      .post<boolean>(`${process.env.API_ENTRYPOINT}/auth/can-access`, {
        role: 'Admin'
      })
      .pipe(
        map((b: boolean) => {
          if (b) {
            return true;
          } else {
            return this.$router.parseUrl('/login');
          }
        })
      );
  }
}
