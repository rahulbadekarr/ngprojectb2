import { TestBed } from '@angular/core/testing';

import { PatientsvisitsService } from './patientsvisits.service';

describe('PatientsvisitsService', () => {
  let service: PatientsvisitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsvisitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
