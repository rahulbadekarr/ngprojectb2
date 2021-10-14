import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientImmunizationComponent } from './patient-immunization/patient-immunization.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientMedicationAllergyComponent } from './patient-medication-allergy/patient-medication-allergy.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PatientDemographicsComponent, PatientImmunizationComponent, PatientMedicationAllergyComponent, PatientHistoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'patient-demographics', component: PatientDemographicsComponent },
      { path: 'patient-immunization', component: PatientImmunizationComponent },
      { path: 'patient-medication-allergy', component:PatientMedicationAllergyComponent},
      { path: 'patient-appointment-history', component:PatientHistoryComponent}

    ]),
  ],
})
export class PatientModule {}
