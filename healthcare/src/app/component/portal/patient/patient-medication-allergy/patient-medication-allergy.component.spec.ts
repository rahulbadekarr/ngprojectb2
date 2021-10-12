import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicationAllergyComponent } from './patient-medication-allergy.component';

describe('PatientMedicationAllergyComponent', () => {
  let component: PatientMedicationAllergyComponent;
  let fixture: ComponentFixture<PatientMedicationAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMedicationAllergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicationAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
