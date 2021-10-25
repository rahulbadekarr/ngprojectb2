import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './component/shared/shared.module';
// import { LoginComponent } from './component/auth/login/login.component';
// import { RegistrationComponent } from './component/auth/registration/registration.component';
import { ForgotUsernameComponent } from './component/auth/forgot-username/forgot-username.component';
import { PhytoviewpatientComponent } from './component/portal/physician/physician/phytoviewpatient/phytoviewpatient.component';



@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegistrationComponent,
    ForgotUsernameComponent,
    ForgotPasswordComponent,
    ForgotPasswordComponent,
    PhytoviewpatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
