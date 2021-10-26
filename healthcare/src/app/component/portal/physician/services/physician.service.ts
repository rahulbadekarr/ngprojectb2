import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppointmentTable, Med_allergy, Users } from 'src/model/tabletypes';
import { Observable } from 'rxjs';
import { Appointments } from 'src/model/Appointment.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PhysicianService {

  private baseUrl = 'http://localhost:3004/schedule_appointment';
  constructor(private http: HttpClient) { }


  getPatientAppoinmentList(
    userId: string,
    startDate: string,
    endDate: string,
    role: string,
    status: string = "Scheduled"
  ): Observable<Appointments[]> {
    let appointmentList: Appointments[] = [];
    let url = `${this.baseUrl}?_sort=date&_order=desc&status=${status}&`;
    if(role === 'Patient'){
      url = url + `patient_id=${userId}`;
    }else if(role === 'Physician'){
      url = url + `physician_id=${userId}`;
    }
    if (startDate && endDate) {
      url = url + `&date_gte=${startDate}&date_lte=${endDate}`;
    }
    // else{
    //   let datepipe: DatePipe = new DatePipe('en-US');
    //   url = url + `&date=${datepipe.transform(new Date(), 'MM/dd/yyyy')}`
    // }
    return this.http.get(url).pipe(
      map((result: AppointmentTable[]) => {
        appointmentList = this.getAppointmentList(result);
        return appointmentList;
      })
    );
  }

  private getAppointmentList(data: AppointmentTable[]): Appointments[] {
    let appointmentList: Appointments[] = [];
    if (data.length > 0) {
      data.forEach((data) => {
        let appointmentObject: Appointments = {
          ...data,
          patient_name: `${data.patient_firstname} ${data.patient_lastname}`,
          physician_name: `${data.physician_firstname} ${data.physician_lastname}`,
        };
        appointmentList.push(appointmentObject);
      });
    }
    return appointmentList;
  }

  getPatientAppointmentDetails(appointmentId : string){
    return this.http.get(`${this.baseUrl}?id=${appointmentId}`)
  }

  updateAppointmentStatus(userAppointmentData : AppointmentTable){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.http.patch(
        `${this.baseUrl}/${userAppointmentData[0].id}`,
        userAppointmentData[0],
        {
          headers: headers,
        }
      );
  }
}
