import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhysicianService } from './services/physician.service';



@NgModule({
  declarations: [
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'appointments',
        component: AppointmentListComponent
      }
    ])
  ],
  providers : [
    PhysicianService
  ]
})
export class PhysicianModule { }
