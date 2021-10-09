import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistrationComponent } from './component/auth/registration/registration.component';
import { ForgotUsernameComponent } from './component/auth/forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';



const APP_ROUTES:Routes=[
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'forgot-username',component:ForgotUsernameComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotUsernameComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
