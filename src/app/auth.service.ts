import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly apollo: Apollo) {}

  public logout() {
    //
    this.apollo.client.resetStore();
  }
}
