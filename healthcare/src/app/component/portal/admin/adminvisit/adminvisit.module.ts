import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminvisitComponent } from './adminvisit.component';
import { ProcedurecodeComponent } from './procedurecode/procedurecode.component';
import { DiognosiscodeComponent } from './diognosiscode/diognosiscode.component';



@NgModule({
  declarations: [   
    AdminvisitComponent,
    ProcedurecodeComponent,
    DiognosiscodeComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminvisitComponent
      }
    ]),
  ]
})
export class AdminvisitModule { }






