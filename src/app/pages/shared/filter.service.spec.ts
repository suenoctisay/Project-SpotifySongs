import { FilterService } from './filter.service';
import { TestBed } from '@angular/core/testing';


describe('FilterSongs', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
