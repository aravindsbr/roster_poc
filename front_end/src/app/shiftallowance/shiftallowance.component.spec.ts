import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftallowanceComponent } from './shiftallowance.component';

describe('ShiftallowanceComponent', () => {
  let component: ShiftallowanceComponent;
  let fixture: ComponentFixture<ShiftallowanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftallowanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftallowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
