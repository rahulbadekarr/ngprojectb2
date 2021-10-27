import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Users } from 'src/model/tabletypes';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventappointService } from 'src/app/services/eventappoint.service';
import { CalendarEvent } from 'src/model/calendarevent.model';
import { UserService } from 'src/app/services/user.service';
import { PatientService } from 'src/app/services/patient.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css'],
})
export class ModalPopUpComponent implements OnInit {
  addedPhysician: string;
  minDate = new Date();
  eventForm: FormGroup;
  physicianUsers: Users[] = [];
  response: string;
  data1: any;
  message: any = {};
  appointmentData: CalendarEvent;
  appointmentStatus: string;
  selectedPhysician: string;

  constructor(
    private fb: FormBuilder,
    private _patientService: PatientService,
    private _eventAppointmentService: EventappointService,
    private _userService: UserService,
    private _snackBarService: CustomSnackBarService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this._userService.getPhysicianUsers().subscribe((res: Users[]) => {
      res.forEach((element) => {
        this.physicianUsers.push(element);
      });
    });
    this.eventForm = this.fb.group({
      physician: new FormControl('', Validators.required),
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      id: [''],
      physicianId: [''],
      PhysicianFirstName: [''],
      PhysicianLastName: [''],
    });
    if (this.data?.event.id) {
      this.appointmentData = this.data.event;
      this.selectedPhysician = this.appointmentData.physician_id;
      this._patientService
        .getAppointmentStatus(this.appointmentData.id)
        .subscribe((res) => {
          this.appointmentStatus = res;
        });
      this.eventForm.controls['title'].setValue(this.appointmentData.title);
      this.eventForm.controls['date'].setValue(this.appointmentData.date);
      this.eventForm.controls['id'].setValue(this.appointmentData.id);
      this.eventForm.controls['physicianId'].setValue(this.appointmentData.physician_id);
      this.eventForm.controls['PhysicianFirstName'].setValue(this.appointmentData.physician_firstname);
      this.eventForm.controls['PhysicianLastName'].setValue(this.appointmentData.physician_lastname);
      this.eventForm.controls['description'].setValue(
        this.appointmentData.description
      );
      this.eventForm.controls['time'].setValue(this.appointmentData.time);
    }
  }

  onSubmit() {
    let user = this._userService.getUserDetails();
    let appointmentData = new CalendarEvent();
    appointmentData.id = this.eventForm.get('id').value;
    appointmentData.time = this.eventForm.get('time').value;
    appointmentData.date = new DatePipe('en-US').transform(
      this.eventForm.get('date').value,
      'MM/dd/YYYY'
    );
    appointmentData.description = this.eventForm.get('description').value;
    appointmentData.title = this.eventForm.get('title').value;
    appointmentData.patient_id = user.id;
    appointmentData.patient_firstname = user.firstname;
    appointmentData.patient_lastname = user.lastname;
    if(this.eventForm.get('physicianId').value !== ''){
      appointmentData.physician_id = this.eventForm.get('physicianId').value;
      appointmentData.physician_firstname = this.eventForm.get('PhysicianFirstName').value;
      appointmentData.physician_lastname = this.eventForm.get('PhysicianLastName').value;
    }else{
      appointmentData.physician_id = this.selectedPhysician;
      appointmentData.physician_firstname = this.addedPhysician?.split(
        ' '
      )[0];
      appointmentData.physician_lastname = this.addedPhysician?.split(
        ' '
      )[1];
    }

    console.log(appointmentData);
    if (
      appointmentData?.id === undefined ||
      appointmentData?.id === ''
    ) {
      appointmentData.status = 'In-Progress';
      console.log(appointmentData);
      this._eventAppointmentService
        .saveAppointmentData(appointmentData)
        .subscribe((res) => {
          if (res) {
            this._snackBarService.openSnackBar(
              'Appointment added successfully!'
            );
            let userId = this._userService.getUserDetails().id;
            this._router.navigate([
              'portal/patient/patient-appointment-history',
              userId,
            ]);
          }
        });
    } else {
      this._eventAppointmentService
        .updateAppointment(appointmentData)
        .subscribe((res) => {
          if (res) {
            this._snackBarService.openSnackBar(
              'Appointment updated successfully!'
            );
            let userId = this._userService.getUserDetails().id;
            this._router.navigate([
              'portal/patient/patient-appointment-history',
              userId,
            ]);
          }
        });
    }
  }

  getSelectedPhysician(event: MatSelectChange) {
    this.addedPhysician = event.source.triggerValue;
  }

  get physician(): AbstractControl {
    return this.eventForm.get('physician');
  }
  get title(): AbstractControl {
    return this.eventForm.get('title');
  }
  get description(): AbstractControl {
    return this.eventForm.get('description');
  }
  get date(): AbstractControl {
    return this.eventForm.get('date');
  }
  get time(): AbstractControl {
    return this.eventForm.get('time');
  }
}
