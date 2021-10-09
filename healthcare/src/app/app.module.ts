import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';

const APP_ROUTES:Routes=[
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule) },
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full' }
];

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
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
