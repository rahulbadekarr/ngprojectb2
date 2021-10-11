import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavContainer, MatSidenavModule, MatSidenavContent, MatSidenav} from '@angular/material/sidenav';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import {PortalModule} from '@angular/cdk/portal';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule, MatIcon, MatIconRegistry} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatNavList } from '@angular/material/list';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSidenavModule,
    PortalModule,
    ScrollingModule,
    MatSliderModule,
    MatSidenavContainer,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatNavList,
    MatSidenavContent, 
    MatSidenav,
    MatIcon, 
    MatIconRegistry
  ],
  exports:[
    CommonModule,
    CommonModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSidenavModule,
    PortalModule,
    ScrollingModule,
    MatSliderModule,
    MatSidenavContainer,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatNavList,
    MatSidenavContent, 
    MatSidenav,
    MatIcon, 
    MatIconRegistry
  ]
})
export class MatFileModule { }
