import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Apollo, gql } from 'apollo-angular';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly $storage: StorageMap,
    private readonly $userService: UserService,
    private readonly $apollo: Apollo
  ) {}

  public ngOnInit() {

  }
}
