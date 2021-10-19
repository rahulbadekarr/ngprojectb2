import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentTable, Med_allergy } from 'src/model/tabletypes';
import { Observable } from 'rxjs';
import { Appointments } from 'src/model/Appointment.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:3004/schedule_appointment';
  private med_allergy_URL = 'http://localhost:3004/medication_allergies';

  constructor(private http: HttpClient) {}

  getPatientAppoinmentList(userId : string) : Observable<Appointments[]>{
    let appointmentList : Appointments[] = [];
    return this.http.get(`${this.baseUrl}?patient_id=${userId}`)
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

  getData(id) {

    return this.http.get(`${this.med_allergy_URL}/${id}`);
  }

  createmedicationallergy(Med_allergy): Observable<Med_allergy> {

      console.log(Med_allergy)
    return this.http.post<Med_allergy>(this.med_allergy_URL, Med_allergy);
  }
}
