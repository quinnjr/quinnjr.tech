import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  constructor(
    private readonly $loader: LoadingBarService
  ) {}

  ngOnInit(): void {
  }

  public get value(): Observable<number> {
    return this.$loader.value$;
  }
}
