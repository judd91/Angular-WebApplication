import { TestBed, async, inject } from '@angular/core/testing';

import { LoadeddataGuard } from './loadeddata.guard';

describe('LoadeddataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadeddataGuard]
    });
  });

  it('should ...', inject([LoadeddataGuard], (guard: LoadeddataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
