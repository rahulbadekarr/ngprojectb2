import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Demographics } from 'src/model/tabletypes';
import { Users } from 'src/model/tabletypes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DemographicsService {
  constructor(private http: HttpClient) {}
  private userDemographicUrl = 'http://localhost:3004/users';

  createUserDemographics(demographicData: Users) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.userDemographicUrl}/${demographicData.id}`,
      demographicData,
      {
        headers: headers,
      }
    );
  }

  getUserDemographics(userId: string): Observable<Users> {
    return this.http
      .get(`${this.userDemographicUrl}?id=${userId}`)
      .pipe(
        map((data: Users[]) => {
          let demographicsData: Users = new Users();
          if (data.length > 0) {
            demographicsData.id = data[0].id;
            // demographicsData.patient_id = data[0].patient_id;
            demographicsData.firstname = data[0].firstname;
            demographicsData.lastname = data[0].lastname;
            demographicsData.dob = data[0].dob;
            demographicsData.gender = data[0].gender;
            demographicsData.ethanicity = data[0].ethanicity ?? '';
            demographicsData.education = data[0].education ?? '';
            demographicsData.occupation = data[0].occupation ?? '';
            demographicsData.address = data[0].address;
            demographicsData.phone = data[0].phone;
            demographicsData.medicalhistory = data[0].medicalhistory ?? '';
            demographicsData.family_medical_history =
              data[0].family_medical_history ?? '';
            demographicsData.surgery = data[0].surgery ?? '';
            demographicsData.insurance_provider =
              data[0].insurance_provider ?? '';
              demographicsData.emergency_contact_name = data[0].emergency_contact_name;
              demographicsData.emergency_contact_email = data[0].emergency_contact_email;
              demographicsData.emergency_contact_mobile = data[0].emergency_contact_mobile;
          }
          return demographicsData;
        })
      );
  }
}
