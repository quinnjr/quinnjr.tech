import { Component } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
// import { Apollo } from 'apollo-angular';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly $storage: StorageMap,
    private readonly $userService: UserService
  ) {}
}
