import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PortalComponent, DashboardComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PortalComponent,
        children: [
          { path: '', redirectTo: 'dashboard' },
          { path: 'dashboard', component: DashboardComponent },
          {path:'profile', component:ProfileComponent},
          {
            path: 'patient',
            loadChildren: () =>
              import('./patient/patient.module').then((m) => m.PatientModule),
          },
        ],
      },
    ]),
  ],
})
export class PortalModule {}
