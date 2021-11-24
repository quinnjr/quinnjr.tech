import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { List } from 'immutable';

import { Message } from './message';
import { Level } from './level';

@Injectable()
export class FlashMessageService {
  private messagesSubject: BehaviorSubject<List<Message>>;

  constructor() {
    this.messagesSubject = new BehaviorSubject(List<Message>());
  }

  public add(value: string, level: Level = Level.Primary) {
    const prevValue = this.messagesSubject.value;
    this.messagesSubject.next(prevValue.push({ value, level }));
  }

  public remove(idx: number) {
    const prevValue = this.messagesSubject.value;
    this.messagesSubject.next(prevValue.remove(idx));
  }

  public get messages(): Observable<List<Message>> {
    return this.messagesSubject.asObservable();
  }
}
