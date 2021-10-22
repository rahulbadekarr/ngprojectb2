import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Appoint, AppointmentTable } from 'src/model/tabletypes';
import { CalendarEvent } from 'src/model/calendarevent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventappointService {

  private baseUrl = 'http://localhost:3004/schedule_appointment';
// message:any={
//   title:"raj",
//   description:"hello rajbro",
//   date:"2021-10-18"
// }
  constructor(private http:HttpClient) { }

  // setMessage(data){
  //   this.message=data;
  // }

  // getMessage(){
  //   return this.message;
  // }

  getMessage(): Observable<CalendarEvent[]>{
    console.log("inside get list")
    let calendarlist:CalendarEvent[]=[]
    return this.http.get(this.baseUrl).pipe(
      // map((data:AppointmentTable[])=>{
      map((data:Appoint[])=>{

        if (data.length > 0) {
          data.forEach((data) => {
            let calenderobj:CalendarEvent = {
              // ...data,
              // patient_name: `${data.patient_firstname} ${data.patient_lastname}`,
              // physician_name: `${data.physician_firstname} ${data.physician_lastname}`,
              title:data.meeting_title,
              date:data.date,
              description:data.description,
              id:data.id,
             

            };
            calendarlist.push(calenderobj);
          });
        }
        console.log("Inside map",calendarlist)
        return calendarlist;


      })
    )
  }

}
