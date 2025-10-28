import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsFilterComponent } from './songs-filter';

describe('SongsFilters', () => {
  let component: SongsFilterComponent;
  let fixture: ComponentFixture<SongsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
