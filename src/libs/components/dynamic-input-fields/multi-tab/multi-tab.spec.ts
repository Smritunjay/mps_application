import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTab } from './multi-tab';

describe('MultiTab', () => {
  let component: MultiTab;
  let fixture: ComponentFixture<MultiTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
