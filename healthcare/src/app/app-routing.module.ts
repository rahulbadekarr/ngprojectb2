import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./component/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'portal',
  //   loadChildren: () =>
  //     import('./component/portal/portal.module').then((m) => m.PortalModule),
  // },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
