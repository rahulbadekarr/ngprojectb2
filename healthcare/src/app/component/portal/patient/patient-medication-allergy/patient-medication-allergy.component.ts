import { Component, OnInit } from '@angular/core';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { PatientMedicationAllergyService } from 'src/app/patient/patient-medication-allergy.service';
import { Med_allergy} from 'src/model/tabletypes';


@Component({
  selector: 'app-patient-medication-allergy',
  templateUrl: './patient-medication-allergy.component.html',
  styleUrls: ['./patient-medication-allergy.component.css'],
})
export class PatientMedicationAllergyComponent implements OnInit {
  med_allergy_form: FormGroup;


  constructor(
    private _medi_allergyService: PatientMedicationAllergyService,
    private fb: FormBuilder,
    private _snack:CustomSnackBarService
  ) {}

  ngOnInit(): void {
    this.updateData(1);
    console.log(this._medi_allergyService.getData);
    this.med_allergy_form = this.fb.group({
      current_medication: ['', Validators.required],
      otc_medication: ['', Validators.required],
      natural_product_hurbs: ['', Validators.required],
      social_drugs: ['', Validators.required],
      past_medication: ['', Validators.required],
      other_allergies_reaction: ['', Validators.required],
      drug_allergies: ['', Validators.required],
    });
  }

  createPatientAllergyDetails() {
    let Patient_Medical_Allergy: Med_allergy = new Med_allergy();

    Patient_Medical_Allergy.current_medication = this.current_medication.value;
    Patient_Medical_Allergy.otc_medication = this.otc_medication.value;
    Patient_Medical_Allergy.natural_product_hurbs =
      this.natural_product_hurbs.value;
    Patient_Medical_Allergy.social_drugs = this.social_drugs.value;
    Patient_Medical_Allergy.past_medication = this.past_medication.value;
    Patient_Medical_Allergy.drug_allergies = this.drug_allergies.value;
    Patient_Medical_Allergy.other_allergies_reaction =
      this.other_allergies_reaction.value;

    this._medi_allergyService
      .createmedicationallergy(Patient_Medical_Allergy)
      .subscribe((data) => {
        this._snack.openSnackBar("Value Added the Server")

      });
      this.med_allergy_form.reset();
  }

  updateData(id: number) {
    return this._medi_allergyService.getData(id).subscribe(console.log);
  }

  get current_medication(): AbstractControl {
    return this.med_allergy_form.get('current_medication');
  }

  get otc_medication(): AbstractControl {
    return this.med_allergy_form.get('otc_medication');
  }
  get natural_product_hurbs(): AbstractControl {
    return this.med_allergy_form.get('natural_product_hurbs');
  }
  get social_drugs(): AbstractControl {
    return this.med_allergy_form.get('social_drugs');
  }
  get past_medication(): AbstractControl {
    return this.med_allergy_form.get('past_medication');
  }
  get drug_allergies(): AbstractControl {
    return this.med_allergy_form.get('drug_allergies');
  }
  get other_allergies_reaction(): AbstractControl {
    return this.med_allergy_form.get('other_allergies_reaction');
  }
}
