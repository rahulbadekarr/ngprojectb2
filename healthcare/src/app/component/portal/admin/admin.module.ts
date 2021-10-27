import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RmanaguserComponent } from './rmanaguser/rmanaguser.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DiognosiscodeComponent } from './diognosiscode/diognosiscode.component';

import { ProcedurecodeComponent } from './procedurecode/procedurecode.component';





@NgModule({
  declarations: [
    ManageUsersComponent,
    DiognosiscodeComponent,

    // ManageUsersComponent,
    RmanaguserComponent,
    ProcedurecodeComponent
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
        path: 'rmanage-users',
        component: RmanaguserComponent
      },
      {
        path: 'diog-code',
        component:  DiognosiscodeComponent,
      },
      {
        path: 'procedurecode',
        component:  ProcedurecodeComponent,
      }
    ])
  ],
  providers :[

  ],
})
export class AdminModule { }
