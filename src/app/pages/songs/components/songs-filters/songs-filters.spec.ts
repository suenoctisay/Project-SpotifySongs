import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsFiltersComponent } from './songs-filters';

describe('SongsFilters', () => {
  let component: SongsFiltersComponent;
  let fixture: ComponentFixture<SongsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
