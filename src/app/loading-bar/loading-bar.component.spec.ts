import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule as NgxLoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { LoadingBarComponent } from './loading-bar.component';

describe('LoadingBarComponent', () => {
  let component: LoadingBarComponent;
  let fixture: ComponentFixture<LoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxLoadingBarModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule
      ],
      declarations: [LoadingBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
