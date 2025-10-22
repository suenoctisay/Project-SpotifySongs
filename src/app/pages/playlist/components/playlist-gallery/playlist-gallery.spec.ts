import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistGalleryComponent } from './playlist-gallery';

describe('PlaylistGallery', () => {
  let component: PlaylistGalleryComponent;
  let fixture: ComponentFixture<PlaylistGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
