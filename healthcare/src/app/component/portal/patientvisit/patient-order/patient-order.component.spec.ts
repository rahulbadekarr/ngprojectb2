import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOrderComponent } from './patient-order.component';

describe('PatientOrderComponent', () => {
  let component: PatientOrderComponent;
  let fixture: ComponentFixture<PatientOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
