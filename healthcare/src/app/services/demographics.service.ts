import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Demographics,Users } from 'src/model/tabletypes';

@Injectable({
  providedIn: 'root'
})
export class DemographicsService {

  constructor(private http: HttpClient, private _router: Router) {}
   // private SECRET_KEY = 'SECRET';
    private userDemographicUrl = 'http://localhost:3004/demographics';




   add_demographic_data(data: Demographics) : Observable<Demographics> {

    let date = new Date();
    let demograpgicData: Demographics = new Demographics();
    //demograpgicData.patient_id = 1;
    demograpgicData.first_name = "";
    demograpgicData.last_name = "";
    demograpgicData.gender = "";
    demograpgicData.ethicity = "";
    demograpgicData.education = "";
    demograpgicData.occupation = "";
    demograpgicData.address = "";
    demograpgicData.medical_history = "";
    demograpgicData.family_medical_history = "";
    demograpgicData.surgery = "";
    demograpgicData.insurance_provider = "";
    demograpgicData.mobile = 9;

    //demograpgicData.dob = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    return this.http.post<Demographics>(this.userDemographicUrl, demograpgicData);
  }

  createUserDemographics(demographicData: Demographics){
    return this.http.patch(this.userDemographicUrl, demographicData);
  }

  getUserDetails(): Users | null {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }

}
