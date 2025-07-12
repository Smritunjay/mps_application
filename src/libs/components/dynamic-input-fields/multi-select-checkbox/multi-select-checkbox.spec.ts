import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectCheckbox } from './multi-select-checkbox';

describe('MultiSelectCheckbox', () => {
  let component: MultiSelectCheckbox;
  let fixture: ComponentFixture<MultiSelectCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
