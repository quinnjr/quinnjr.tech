import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBehaviorSubject: BehaviorSubject<User>;

  constructor() {
    this.userBehaviorSubject = new BehaviorSubject({} as User);
  }

  public load(user: User) {
    this.userBehaviorSubject.next(user);
  }

  public unload() {
    this.userBehaviorSubject.next({} as User);
  }

  public asObservable(): Observable<User> {
    return this.userBehaviorSubject.asObservable();
  }
}
