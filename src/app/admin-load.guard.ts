declare const process: any;

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
  Router
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminLoadGuard implements CanActivate, CanLoad {
  constructor(
    private readonly $httpClient: HttpClient,
    private readonly $router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
