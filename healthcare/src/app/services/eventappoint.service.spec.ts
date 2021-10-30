import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CalendarEvent } from 'src/model/calendarevent.model';

import { EventappointService } from './eventappoint.service';

describe('EventappointService', () => {
  let service: EventappointService;
  let mockHttpClient;
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(EventappointService);
    service= new EventappointService(mockHttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return events data', () => {
    let mockresponse:CalendarEvent[]=[

      {
        "id":"JJcY76P",
        "patient_id": "su56c",
        "patient_firstname": "Soham",
        "patient_lastname": "Sharma",
        "physician_id": "su56c",
        "physician_firstname": "Rahul",
        "physician_lastname": "Patil",
        "title": "fever checkup",
        "description": "fever checkup",
        "date": "2021-10-10",
        "time":"3-4",
        "status": "Inprogress",

      }
    ]
    
    let response;
    spyOn(service,'getMessage').and.returnValue(of(mockresponse));
    service.getMessage('su56c').subscribe(res => {response =res});
    expect(response).toEqual(mockresponse);
    console.log(response);
    console.log(mockresponse);


    //expect(service).toBeTruthy();
  });


});
