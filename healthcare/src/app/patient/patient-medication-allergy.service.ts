import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Med_allergy, Users } from 'src/model/tabletypes';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientMedicationAllergyService implements Med_allergy {
  private med_allergy_URL = 'http://localhost:3004/medication_allergies';

  constructor(private http: HttpClient) {}
  id: number;
  patient_id: string;
  current_medication: string;
  otc_medication: string;
  natural_product_hurbs: string;
  social_drugs: string;
  past_medication: string;
  drug_allergies: string;
  other_allergies_reaction: string;

  getData(id) {

    return this.http.get(`${this.med_allergy_URL}/${id}`);
  }

  createmedicationallergy(Med_allergy): Observable<Med_allergy> {

      console.log(Med_allergy)
    return this.http.post<Med_allergy>(this.med_allergy_URL, Med_allergy);
  }


}
