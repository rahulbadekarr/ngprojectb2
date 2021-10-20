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
  createAppointment(appointmentData: AppointmentTable) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(
      `${this.schedule_appointmentUrl}/${appointmentData.id}`,
      appointmentData,
      {
        headers: headers,
      }
    );
  }


  getPatientAppoinmentList(userId : string) : Observable<Appointments[]>{
    let appointmentList : Appointments[] = [];
    return this.http.get(`${this.schedule_appointmentUrl}?patient_id=${userId}`)
        .pipe(
          map((result : AppointmentTable[]) => {
            if(result.length > 0){
              result.forEach(data => {
                let appointmentObject : Appointments = {
                  ...data,
                  patient_name : `${data.patient_firstname} ${data.patient_lastname}`,
                  physician_name : `${data.physician_firstname} ${data.physician_lastname}`
                }
                appointmentList.push(appointmentObject);
              });
            }
            return appointmentList;
          })
        );
  }


}
