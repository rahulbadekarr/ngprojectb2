import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointments } from 'src/model/tabletypes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3004/schedule_appointment';

  constructor(private http: HttpClient) {}

  getPatientAppoinmentList(userId : string){
    return this.http.get<Appointments>(`${this.baseUrl}?patient_id=${userId}`);
  }
}
