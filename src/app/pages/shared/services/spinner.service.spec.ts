import { TestBed } from '@angular/core/testing';

import { SpinnerSevice } from './spinner.service';

describe('Spinner', () => {
  let service: SpinnerSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
