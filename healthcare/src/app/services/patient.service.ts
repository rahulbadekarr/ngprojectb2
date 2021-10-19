import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointments, Med_allergy } from 'src/model/tabletypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:3004/schedule_appointment';
  private med_allergy_URL = 'http://localhost:3004/medication_allergies';

  constructor(private http: HttpClient) {}

  getPatientAppoinmentList(userId : string){
    console.log(userId);
    return this.http.get<Appointments[]>(`${this.baseUrl}?patient_id=${userId}`);
  }

  getData(id) {

    return this.http.get(`${this.med_allergy_URL}/${id}`);
  }

  createmedicationallergy(Med_allergy): Observable<Med_allergy> {

      console.log(Med_allergy)
    return this.http.post<Med_allergy>(this.med_allergy_URL, Med_allergy);
  }
}
