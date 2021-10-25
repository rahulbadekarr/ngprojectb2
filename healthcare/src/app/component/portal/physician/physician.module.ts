import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';



@NgModule({
  declarations: [PatientDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'patient-detail', component: PatientDetailComponent},
    ]),
  ],
})
export class PhysicianModule { }
