import { TestBed, async, inject } from '@angular/core/testing';

import { UnLoginGuard } from './un-login.guard';

describe('UnLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnLoginGuard]
    });
  });

  it('should ...', inject([UnLoginGuard], (guard: UnLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
