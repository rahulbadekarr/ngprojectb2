import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PatientvisitService {
  patientvisitUrl = 'http://localhost:3004/order';
  // patientvisitProcedure='http://localhost:3000/procedure_cod'

  constructor(private http: HttpClient) {}

  getpatientvisit(appointment_id) {
    console.log('inside services');
    return this.http.get(`${this.patientvisitUrl}/${appointment_id} `)
  }

  // getprocedureCod(appointment_id){
  //   return this.http.get(`${this.patientvisitProcedure}/${appointment_id} `)
  // }
}
