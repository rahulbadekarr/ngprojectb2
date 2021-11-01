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

  getPatientAppoinmentList(
    userId: string,
    startDate: string,
    endDate: string,
    patientId: string,
    role: string
  ): Observable<Appointments[]> {
    let appointmentList: Appointments[] = [];
    let url = `${this.baseUrl}?_sort=date&_order=desc&`;
    if(role === 'Patient'){
      url = url + `patient_id=${userId}`;
    }else if(role === 'Physician'){
      url = url + `physician_id=${userId}&patient_id=${patientId}`;
    }else if(role === 'Admin'){
      url = url + `patient_id=${patientId}`;
    }

    if (startDate && endDate) {
      url = url + `&date_gte=${startDate}&date_lte=${endDate}`;
    }
    return this.http.get(url).pipe(
      map((result: AppointmentTable[]) => {
        appointmentList = this.getAppointmentList(result);
        return appointmentList;
      })
    );
  }

  getAppointmentStatus(appointmentId : string) : Observable<string>{
    return this.http.get(`${this.baseUrl}?id=${appointmentId}`)
      .pipe(
        map((resData : AppointmentTable) =>{
          return resData[0].status
        })
      )
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

  getData(id) {
    return this.http.get(`${this.med_allergy_URL}/${id}`);
  }

  createmedicationallergy(Med_allergy): Observable<Med_allergy> {
    console.log(Med_allergy);
    return this.http.post<Med_allergy>(this.med_allergy_URL, Med_allergy);
  }

  getMedicationData(userId : string):Observable<any>{
    return this.http.get(`${this.med_allergy_URL}?patient_id=${userId}`)
  }

  deleteMedicationData(id){
    return this.http.delete(`${this.med_allergy_URL}/${id}`)
  }

}
