import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Users } from 'src/model/tabletypes';


import { DemographicsService } from './demographics.service';

describe('DemographicsService', () => {
  let service: DemographicsService;
let mockHttpClient;
//let mockMessageresponse;
//const createUserDemographics = [] as  any;

  beforeEach(() => {
    service= new DemographicsService(mockHttpClient)
    //TestBed.configureTestingModule({});

    //service = TestBed.get(DemographicsService);
   // service = TestBed.inject(DemographicsService);
  });

  it('should return demographics data', () => {
    let mockresponse:Users=

      {
        "firstname": "Akansha",
        "lastname": "Sahu",
        "phone": 9878678767,
        "dob": "9/4/1990",
        "id": "YxgbFeV",
        "gender": "Female",
        "education": "Lawyer",
        "address": "Test Address",
        "emergency_contact_name": "",
      "emergency_contact_email": "",
      "emergency_contact_mobile": "",
      "role": "Patient",
      "email": "test@test.com",
      "password": "111",
      "createdDate": "10/06/2021",
      "isActive": true,
      "ethanicity": "efe", 
  "occupation": "vd", 
   "medicalhistory": "fe", 
  "family_medical_history": "ffe", 
   "surgery": "fe", 
   "insurance_provider": "efed", 
   "profilepicture": "ef"

      }
    
    let response;
    spyOn(service,'getUserDemographics').and.returnValue(of(mockresponse));
    service.getUserDemographics('abc').subscribe(res => {response =res});
    expect(response).toEqual(mockresponse);
    console.log(response);
    console.log(mockresponse);


    //expect(service).toBeTruthy();
  });
});



