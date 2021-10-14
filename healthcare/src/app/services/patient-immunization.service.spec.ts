import { TestBed } from '@angular/core/testing';

import { PatientImmunizationService } from './patient-immunization.service';

describe('PatientImmunizationService', () => {
  let service: PatientImmunizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientImmunizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
