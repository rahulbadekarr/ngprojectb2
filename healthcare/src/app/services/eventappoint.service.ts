import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Appoint } from 'src/model/tabletypes';
import { CalendarEvent } from 'src/model/calendarevent.model';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventappointService {

  private baseUrl = 'http://localhost:3004/schedule_appointment';

  constructor(private http:HttpClient) { }

  getMessage(loggedInUserId: string): Observable<CalendarEvent[]>{
    let calendarlist:CalendarEvent[]=[];
    let datepipe: DatePipe = new DatePipe('en-US');
    return this.http.get(`${this.baseUrl}?patient_id=${loggedInUserId}`).pipe(
      map((data:Appoint[])=>{
        if (data.length > 0) {
          data.forEach((data) => {
            let calenderobj:CalendarEvent = {
              title:data.title,
              date:datepipe.transform(data.date, 'YYYY-MM-dd'),
              description:data.description,
              id:data.id,
              patient_id: data.patient_id,
              patient_firstname : data.patient_firstname,
              patient_lastname : data.patient_lastname,
              physician_id: data.physician_id,
              physician_firstname : data.physician_firstname,
              physician_lastname : data.physician_lastname,
              time: data.time,
              status: data.status
            };
            calendarlist.push(calenderobj);
          });
        }
        return calendarlist;
      })
    )
  }

  saveAppointmentData(appointmentData : CalendarEvent){
    return this.http.post(this.baseUrl,appointmentData)
  }

  updateAppointment(appointmentData : CalendarEvent){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.baseUrl}/${appointmentData.id}`,
      appointmentData,
      {
        headers: headers,
      }
    );
  }

}
