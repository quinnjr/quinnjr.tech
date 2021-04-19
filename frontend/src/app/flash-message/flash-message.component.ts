import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';

import { FlashMessageService } from './flash-message.service';
import { Level } from './level';
import { Message } from './message';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit {

  constructor(
    private readonly $flashMessageService: FlashMessageService
  ) { }

  ngOnInit(): void {
  }

  public get messages(): Observable<List<Message>> {
    return this.$flashMessageService.messages;
  }

  public close(idx: number) {
    this.$flashMessageService.remove(idx);
  }
}
