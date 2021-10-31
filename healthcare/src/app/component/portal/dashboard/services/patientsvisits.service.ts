import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Users } from 'src/model/tabletypes';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PatientsvisitsService {
  patientorderUrl = 'http://localhost:3004/users';

  constructor(private http: HttpClient) { }

  getusersdata(){
    return this.http.get<any>(`${this.patientorderUrl}`)
  }
}