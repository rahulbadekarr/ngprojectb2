import { TestBed } from '@angular/core/testing';

import { EventappointService } from './eventappoint.service';

describe('EventappointService', () => {
  let service: EventappointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventappointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
