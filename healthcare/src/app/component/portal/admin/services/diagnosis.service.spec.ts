import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DiagnosisService } from './diagnosis.service';

describe('DiagnosisService', () => {
  let service: DiagnosisService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DiagnosisService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });


  it('#getData should return expected data', (done) => {
    const expectedData = [
      {
        "id": "",
        "diagnosis_code_name": ""
      },
    ];

    service.getDiagnosis().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:3004/diagnosis_code');

    testRequest.flush(expectedData);
  });

  it('#getDiognosis should use GET to retrieve data', () => {
    service.getDiagnosis().subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:3004/diagnosis_code');

    expect(testRequest.request.method).toEqual('GET');
  });

  // it('#update should use Patch to delete data', () => {
  //  let data= {
  //     "id": "9898493",
  //     "diagnosis_code_name": "TestUser"
  //   }
  //   service.deleteDiagnosis(data.id).subscribe();

  //   const testRequest = httpTestingController.expectOne('http://localhost:3004/diagnosis_code');

  //   expect(testRequest.request.method).toEqual('DELETE');
  // });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
