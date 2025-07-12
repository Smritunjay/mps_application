import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hyperlinks } from './hyperlinks';

describe('Hyperlinks', () => {
  let component: Hyperlinks;
  let fixture: ComponentFixture<Hyperlinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hyperlinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hyperlinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
