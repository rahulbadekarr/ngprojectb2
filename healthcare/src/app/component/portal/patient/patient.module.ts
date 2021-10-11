import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientImmunizationComponent } from './patient-immunization/patient-immunization.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientMedicationAllergyComponent } from './patient-medication-allergy/patient-medication-allergy.component';

@NgModule({
  declarations: [PatientDemographicsComponent, PatientImmunizationComponent, PatientMedicationAllergyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'patient-demographics', component: PatientDemographicsComponent },
      { path: 'patient-immunization', component: PatientImmunizationComponent },
      {path:'patient-medication-allergy',component:PatientMedicationAllergyComponent}
    ]),
  ],
})
export class PatientModule {}
