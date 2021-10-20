import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PatientVisitDetailComponent } from './patient-visit-detail/patient-visit-detail.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { PatientOrderComponent } from './patient-order/patient-order.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PatientVisitDetailComponent, PatientInformationComponent, PatientOrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PatientVisitDetailComponent
      }
    ]),
  ]
})
export class PatientVisitModule { }
