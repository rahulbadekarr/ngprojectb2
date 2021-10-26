import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, procedure_code } from 'src/model/tabletypes';
@Injectable({
  providedIn: 'root',
})
export class PatientvisitService {
  patientvisitUrl = 'http://localhost:3004/order';
  procedurecodeUrl = 'http://localhost:3004/procedure_code';
  // patientvisitProcedure='http://localhost:3000/procedure_cod'

  constructor(private http: HttpClient) {}

  getpatientvisit(appointment_id) : Observable<Order> {
    return this.http.get<Order>(`${this.patientvisitUrl}?appointment_id=${appointment_id} `)
  }

  getprocedureCodes() : Observable<procedure_code[]>{
    return this.http.get<procedure_code[]>(`${this.procedurecodeUrl}`);
  }
  // getprocedureCod(appointment_id){
  //   return this.http.get(`${this.patientvisitProcedure}/${appointment_id} `)
  // }
}
