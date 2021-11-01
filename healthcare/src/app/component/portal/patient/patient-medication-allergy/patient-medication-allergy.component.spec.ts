import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
// import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

import { PatientMedicationAllergyComponent } from './patient-medication-allergy.component';

describe('PatientMedicationAllergyComponent', () => {
  let component: PatientMedicationAllergyComponent;
  let fixture: ComponentFixture<PatientMedicationAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMedicationAllergyComponent ],
      imports:[MatSnackBarModule,FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule],
      providers:[
         PatientService,
         FormBuilder,
       CustomSnackBarService
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PatientMedicationAllergyComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PatientMedicationAllergyComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('is Patient Medication Allergy Component Present', () => {

    expect(component).toBeDefined();
  });

  it('Is Patient Medication Allergy form invalid when empty/invalid data is inserted',()=>{
    let drugallergy=component.med_allergy_form.controls["drug_allergies"];
    drugallergy.setValue("Penicillin")
    let socialdrug=component.med_allergy_form.controls["social_drugs"];
    socialdrug.setValue("cannabis")
    let otherallergysection=component.med_allergy_form.controls["other_allergies_reaction"];
    otherallergysection.setValue("Itchy Eyes to Sneezing")
   


    expect(component.med_allergy_form.valid).toBeTruthy()
  })


});
