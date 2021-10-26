import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RmanaguserComponent } from './rmanaguser/rmanaguser.component';



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
        path: 'rmanage-users',
        component: RmanaguserComponent
      }
    ])
  ],
  providers : [

  ]
})
export class AdminModule { }
