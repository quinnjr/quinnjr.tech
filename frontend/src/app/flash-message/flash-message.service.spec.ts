import { TestBed } from '@angular/core/testing';

import { FlashMessageService } from './flash-message.service';

describe('FlashMessageService', () => {
  let service: FlashMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlashMessageService
      ]
    });
    service = TestBed.inject(FlashMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
