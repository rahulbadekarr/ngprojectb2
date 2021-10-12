import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Med_allergy} from 'src/model/tabletypes'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientMedicationAllergyService{
  private medicationAllergyURL = 'http://localhost:3000/medication_allergies';

  constructor(private http:HttpClient) { }

  getUserMedAllergyDetails()
  {
     return this.http.get(`${this.medicationAllergyURL}`).pipe(map((data:Med_allergy[])=>{
        console.log("from Service ",data)

      }))


  }
}
