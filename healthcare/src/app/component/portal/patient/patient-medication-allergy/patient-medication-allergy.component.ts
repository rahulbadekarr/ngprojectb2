import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
// import { PatientMedicationAllergyService } from 'src/app/patient/patient-medication-allergy.service';
import { Med_allergy } from 'src/model/tabletypes';

@Component({
  selector: 'app-patient-medication-allergy',
  templateUrl: './patient-medication-allergy.component.html',
  styleUrls: ['./patient-medication-allergy.component.css'],
})
export class PatientMedicationAllergyComponent implements OnInit {

  MedData : Med_allergy ;
  med_allergy: FormGroup;
  constructor(
    // private medi_allergyService: PatientMedicationAllergyService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.med_allergy = this.fb.group({
      current_medication: [''],
      otc_medication: [''],
      natural_product_hurbs: [''],
      socila_drugs: [''],
      past_medication: [''],
      drug_allergies: [''],
      other_allergies_reaction: [''],
    });

  }

  // Test() {
  //   this.medi_allergyService
  //     .getUserMedAllergyDetails()
  //     .subscribe();
  // }

  get current_medication(): AbstractControl {
    return this.med_allergy.get('current_medication');
  }

  get otc_medication(): AbstractControl {
    return this.med_allergy.get('otc_medication');
  }
  get natural_product_hurbs(): AbstractControl {
    return this.med_allergy.get('natural_product_hurbs');
  }
  get socila_drugs(): AbstractControl {
    return this.med_allergy.get('socila_drugs');
  }
  get past_medication(): AbstractControl {
    return this.med_allergy.get('past_medication');
  }
  get drug_allergies(): AbstractControl {
    return this.med_allergy.get('drug_allergies');
  }
  get other_allergies_reaction(): AbstractControl {
    return this.med_allergy.get('other_allergies_reaction');
  }
}
