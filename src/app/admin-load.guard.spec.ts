import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminLoadGuard } from './admin-load.guard';

describe('AdminGuard', () => {
  let guard: AdminLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(AdminLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
