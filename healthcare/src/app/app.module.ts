import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';

// ... Mat files includes here temporarily only
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ... Mat files includes here temporarily only end

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  // mat module starts from here 
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
     // mat module ends from here 
  ],
  exports:[
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

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
