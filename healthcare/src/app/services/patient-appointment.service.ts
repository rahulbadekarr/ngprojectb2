import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentTable } from 'src/model/tabletypes';
import { Appointments } from 'src/model/Appointment.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentService {

  constructor(private http: HttpClient) { }
  private schedule_appointmentUrl = 'http://localhost:3004/schedule_appointment';


  createAppointment(appointmentData:AppointmentTable){
    return this.http.post(this.schedule_appointmentUrl, appointmentData);
  }


  // getData(postData:number) {
  //   return this.http.put(`${this.schedule_appointmentUrl}/${id}`);
  //   // let endPoints = "http://localhost:3004/schedule_appointment/10"
  //   // this.http.put(this.schedule_appointmentUrl + endPoints, postData).subscribe(data => {
  //   //   console.log(data);
  //   // });
  // }

  // getData(appointmentData: AppointmentTable) {
  //   return this.http.patch('http://localhost:3004/schedule_appointment/',appointmentData);

  // }


}
