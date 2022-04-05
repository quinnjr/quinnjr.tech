import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Message } from './message';
import { Level } from './level';

@Injectable()
export class FlashMessageService {
  private messagesSubject: BehaviorSubject<Message[]> = new BehaviorSubject([] as Message[]);

  constructor() {}

  public add(value: string, level: Level = Level.Primary) {
    const val = this.messagesSubject.value;
    val.push({value, level});
    this.messagesSubject.next(val);
  }

  public remove(idx: number) {
    const val = this.messagesSubject.value;
    val.splice(idx);
    this.messagesSubject.next(val);
  }

  public get messages(): Observable<Message[]> {
    return this.messagesSubject.asObservable();
  }
}
