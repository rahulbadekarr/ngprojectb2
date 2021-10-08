import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistrationComponent } from './component/auth/registration/registration.component';
import { ForgotUsernameComponent } from './component/auth/forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/auth/dashboard/dashboard.component';


const APP_ROUTES:Routes=[
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'forgot-username',component:ForgotUsernameComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotUsernameComponent,
    ForgotPasswordComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
