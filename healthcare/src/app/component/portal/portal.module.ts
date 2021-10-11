import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [PortalComponent, DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PortalComponent,
        children: [
          { path: '', redirectTo: 'dashboard' },
          { path: 'dashboard', component: DashboardComponent },
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
