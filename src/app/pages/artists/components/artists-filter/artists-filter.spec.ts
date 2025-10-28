import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsFilterComponent } from './artists-filter';

describe('ArtistsFilter', () => {
  let component: ArtistsFilterComponent;
  let fixture: ComponentFixture<ArtistsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
