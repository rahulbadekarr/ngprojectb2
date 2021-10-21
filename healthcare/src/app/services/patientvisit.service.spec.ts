import { TestBed } from '@angular/core/testing';

import { PatientvisitService } from './patientvisit.service';

describe('PatientvisitService', () => {
  let service: PatientvisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientvisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
