import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsGalleryComponent } from './artists-gallery';

describe('ArtistisGallery', () => {
  let component: ArtistsGalleryComponent;
  let fixture: ComponentFixture<ArtistsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
