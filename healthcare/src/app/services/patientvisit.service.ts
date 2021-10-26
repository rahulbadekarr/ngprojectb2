import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, procedure_code } from 'src/model/tabletypes';
@Injectable({
  providedIn: 'root',
})
export class PatientvisitService {
  patientorderUrl = 'http://localhost:3004/order';
  procedurecodeUrl = 'http://localhost:3004/procedure_code';

  constructor(private http: HttpClient) {}

  getpatientvisit(appointment_id) : Observable<Order> {
    return this.http.get<Order>(`${this.patientorderUrl}?appointment_id=${appointment_id} `)
  }

  getprocedureCodes() : Observable<procedure_code[]>{
    return this.http.get<procedure_code[]>(`${this.procedurecodeUrl}`);
  }

  savePatientOrder(patientOrderData : Order){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.patientorderUrl}/${patientOrderData.id}`,
      patientOrderData,
      {
        headers: headers,
      }
    );
  }
  // getprocedureCod(appointment_id){
  //   return this.http.get(`${this.patientvisitProcedure}/${appointment_id} `)
  // }
}
