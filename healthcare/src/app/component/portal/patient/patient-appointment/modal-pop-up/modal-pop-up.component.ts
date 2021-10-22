import { DatePipe } from '@angular/common';
import { Component, OnInit,Inject, Output,EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { PatientAppointmentService } from 'src/app/services/patient-appointment.service';
import { UserService } from 'src/app/services/user.service';
import { Appointments } from 'src/model/Appointment.model';
import { AppointmentTable, Users } from 'src/model/tabletypes';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventappointService } from 'src/app/services/eventappoint.service';



@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css']
})
export class ModalPopUpComponent implements OnInit {

  // @Output() childData=new EventEmitter<any>()

  eventForm: FormGroup;
  //specialities = ['Patient', 'Physician'];
 // physicians= ['Obstetrician/Gynecologist','Cardiologist','Oncologist','Infectious Disease Physician','Gastroenterologist'];
  physicians = [ { physician_id:"su56c", physician_firstname:"",physician_lastname:""} ];
  user: Users = new Users();
  response:string;
  data1:any;
  constructor(private evtapp:EventappointService ,private fb: FormBuilder,private _PatientAppointmentService: PatientAppointmentService,@Inject(MAT_DIALOG_DATA) public data: any) { }
  message:any={}
  ngOnInit(): void {
  //this.updateappoinment(10);
  // this.evtapp.getMessage()
    console.log(this.eventForm);
    this.eventForm = this.fb.group(
      {
       // meeting_title: new FormControl('', Validators.required),
        physician: new FormControl('', Validators.required),
        meeting_title: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required],
        time: ['', [Validators.required]],
        status: ['',Validators.required],
        // dummy:['']
      }

    );
    console.log(this.data);
    if(this.data){
      this.eventForm.controls['meeting_title'].setValue(this.data.event.title)
      this.eventForm.controls['date'].setValue(this.data.event.date)
      // this.eventForm.controls['time'].setValue(this.data.event.time)
      // this.eventForm.controls['dummy'].setValue(this.data.event.dummy)
      this.eventForm.controls['description'].setValue(this.data.event.description)

    }



  }



  onSubmit() {

    let userappointment: AppointmentTable = new AppointmentTable();
    userappointment = this.eventForm.value;
    userappointment.patient_id = this.user.id;
    userappointment.date = new DatePipe('en-US').transform(this.date.value, 'yyyy-MM-dd');
    // userappointment.date = new DatePipe('en-US').transform(this.date.value, 'MM/dd/yyyy');
    this._PatientAppointmentService.createAppointment(userappointment)
        .subscribe((response) => {
          console.log('response consoling', response);
          this.message=response;


        })
        // this.childData.emit(this.collection)

  }

  // updateappointment() {
  //   let userappointment: AppointmentTable = new AppointmentTable();
  //   userappointment = this.eventForm.value;
  //   userappointment.patient_id = this.user.id;
  //   userappointment.date = new DatePipe('en-US').transform(this.date.value, 'yyyy-MM-dd');
  //   this._PatientAppointmentService.getData(userappointment)
  //       .subscribe((response) => {
  //         console.log('response update', response);

  //       })
  // }



  // get meeting_title(): AbstractControl {
  //   return this.eventForm.get('meeting_title');
  // }
  get physician(): AbstractControl {
    return this.eventForm.get('physician');
  }
  get meeting_title(): AbstractControl {
    return this.eventForm.get('meeting_title');
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
  get status(): AbstractControl {
    return this.eventForm.get('time');
  }
}
