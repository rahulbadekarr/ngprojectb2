import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProcedurecodeComponent } from './procedurecode/procedurecode.component';
import { DiagnosiscodeComponent } from './diagnosiscode/diagnosiscode.component';
import { AdminService } from './services/admin.service';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    ManageUsersComponent,
    ProcedurecodeComponent,
    DiagnosiscodeComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'manageusers',
        component: ManageUsersComponent
      },
      {
        path: 'diagnosiscode',
        component:  DiagnosiscodeComponent,
      },
      {
        path: 'procedurecode',
        component:  ProcedurecodeComponent,
      },
      {
        path: 'create-user',
        component:  CreateUserComponent,
      },
      
    ])
  ],
  providers :[
    AdminService
  ],
})
export class AdminModule { }
