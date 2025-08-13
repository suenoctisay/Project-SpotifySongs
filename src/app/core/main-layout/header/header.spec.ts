import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompoenent } from './header';

describe('Header', () => {
  let component: HeaderCompoenent;
  let fixture: ComponentFixture<HeaderCompoenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCompoenent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCompoenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
