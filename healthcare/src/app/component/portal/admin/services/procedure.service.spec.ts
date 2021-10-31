import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DiagnosisService } from './diagnosis.service';
import { ProcedureService } from './procedure.service';

describe('DiagnosisService', () => {
  let service: ProcedureService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProcedureService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });


  it('#getData should return expected data', (done) => {
    const expectedData = [
      {
        id:"",
procedure_code_name: ""
      },
    ];

    service.getProcedure().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:3004/procedure_code');

    testRequest.flush(expectedData);
  });

  it('#getDiognosis should use GET to retrieve data', () => {
    service.getProcedure().subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:3004/procedure_code');

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
