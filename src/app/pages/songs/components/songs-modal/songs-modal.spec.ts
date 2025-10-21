import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsNewModalCompoent } from './songs-modal';

describe('SongsNewModal', () => {
  let component: SongsNewModalCompoent;
  let fixture: ComponentFixture<SongsNewModalCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsNewModalCompoent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsNewModalCompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
