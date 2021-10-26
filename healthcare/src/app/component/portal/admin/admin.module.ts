import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RmanaguserComponent } from './rmanaguser/rmanaguser.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProcedurecodeComponent } from './procedurecode/procedurecode.component';
import { DiognosiscodeComponent } from './diognosiscode/diognosiscode.component';



@NgModule({
  declarations: [
    // ManageUsersComponent,
    RmanaguserComponent
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
      {
        path: 'rmanage-users',
        component: RmanaguserComponent
      },
      {
        path: 'diog-code',
        component:  DiognosiscodeComponent,
      },
      {
        path: 'procedure-code',
        component:  ProcedurecodeComponent,
      }
    ])
  ],
  providers : [
  ]
})
export class AdminModule { }
