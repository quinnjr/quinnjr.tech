import { TestBed } from '@angular/core/testing';
import { FlashMessageService } from './flash-message/flash-message.service';

import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpErrorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptor, FlashMessageService]
    })
  );

  it('should be created', () => {
    const interceptor: HttpErrorInterceptor =
      TestBed.inject(HttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
