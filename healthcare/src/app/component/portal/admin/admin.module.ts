import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DiognosiscodeComponent } from './diognosiscode/diognosiscode.component';
import { AdddialogPopupComponent } from './diognosiscode/adddialog-popup/adddialog-popup.component';



@NgModule({
  declarations: [
    ManageUsersComponent,
    DiognosiscodeComponent,
    AdddialogPopupComponent
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
        path: 'diog-data',
        component: DiognosiscodeComponent
      }
    ])
  ],
  providers : [

  ]
})
export class AdminModule { }
