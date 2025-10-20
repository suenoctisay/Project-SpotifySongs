import { AppService } from './app.service';
import { TestBed } from '@angular/core/testing';


describe('FilterSongs', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
