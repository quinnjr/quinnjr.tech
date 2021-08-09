import { TestBed } from '@angular/core/testing';
import { FlashMessageModule } from './flash-message/flash-message.module';

import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpErrorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [FlashMessageModule],
      providers: [HttpErrorInterceptor]
    })
  );

  it('should be created', () => {
    const interceptor: HttpErrorInterceptor =
      TestBed.inject(HttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
