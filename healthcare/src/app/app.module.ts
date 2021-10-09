import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AuthModule } from './component/auth/auth.module';

import { AppComponent } from './app.component';
// import { ForgotUsernameComponent } from './component/auth/forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';



const APP_ROUTES:Routes=[
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule) },

  // {path:'forgot-username',component:ForgotUsernameComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    // ForgotUsernameComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
