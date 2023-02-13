import { TestBed } from '@angular/core/testing';

import { BackFromEditGuard } from './back-from-edit.guard';

describe('BackFromEditGuard', () => {
  let guard: BackFromEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackFromEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
