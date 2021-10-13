import { TestBed } from '@angular/core/testing';

import { PatientMedicationAllergyService } from './patient-medication-allergy.service';

describe('PatientMedicationAllergyService', () => {
  let service: PatientMedicationAllergyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientMedicationAllergyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
