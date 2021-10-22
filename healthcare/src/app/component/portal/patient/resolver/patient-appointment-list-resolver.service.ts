import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { Appointments } from 'src/model/Appointment.model';

@Injectable()
export class PatientAppointmentListResolver implements Resolve<Appointments[]>{

  constructor(private _patientService: PatientService,
    private _userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Appointments[] | Observable<Appointments[]> | Promise<Appointments[]> {
    let id = this._userService.getUserDetails().id;
    return this._patientService
      .getPatientAppoinmentList(id, '', '');
  }

}
