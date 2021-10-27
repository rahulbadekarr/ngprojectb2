import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { diagnosis_code } from 'src/model/tabletypes';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  diagnosisUrl = 'http://localhost:3004/diagnosis_code';

  constructor(private http:HttpClient) { }

  saveDiagnosis(data:diagnosis_code){
    return this.http.post(this.diagnosisUrl,data);
  }

  getDiagnosis(){
    return this.http.get(this.diagnosisUrl);
  }

  updateDiagnosisCode(data : diagnosis_code){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.diagnosisUrl}/${data.id}`,
      data,
      {
        headers: headers,
      }
    );
  }

  deleteDiagnosis(id:string){
    return this.http.delete(`${this.diagnosisUrl}/${id}`)
  }

  checkDiagnosisCodeExists(name : string){
    return this.http.get(`${this.diagnosisUrl}?diagnosis_code_name=${name}`)
  }
}
