import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProcedurecodeComponent } from './procedurecode/procedurecode.component';
import { DiognosiscodeComponent } from './diognosiscode/diognosiscode.component';




@NgModule({
  declarations: [
    ManageUsersComponent,
    ProcedurecodeComponent,
    DiognosiscodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'manage-users',
        component: ManageUsersComponent
      },
    ])
  ],
  providers : [

  ]
})
export class AdminModule { }
