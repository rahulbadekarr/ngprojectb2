import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentTable, Users,  Order, procedure_code} from 'src/model/tabletypes';
import {Appointments } from 'src/model/Appointment.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PatientsvisitsService {
  patientUrl = 'http://localhost:3004/Appointments';
  patientorderUrl = 'http://localhost:3004/order';
  procedurecodeUrl = 'http://localhost:3004/procedure_code';

  constructor(private http: HttpClient) { }

  getusersdata(){
    return this.http.get<Appointments>(`${this.patientUrl}`)
  }
  getpatientvisit(appointment_id) : Observable<Order> {
    return this.http.get<Order>(`${this.patientorderUrl}?appointment_id=${appointment_id} `)
  }
  getprocedureCodes() : Observable<procedure_code[]>{
    return this.http.get<procedure_code[]>(`${this.procedurecodeUrl}`);
  }
  // savePatientOrder(patientOrderData : Order){
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   return this.http.patch(
  //     `${this.patientorderUrl}/${patientOrderData.id}`,
  //     patientOrderData,
  //     {
  //       headers: headers,
  //     }
  //   );
  // }
}