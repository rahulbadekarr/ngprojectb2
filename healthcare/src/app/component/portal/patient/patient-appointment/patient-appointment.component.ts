import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent,CalendarOptions} from '@fullcalendar/angular';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatDialog} from '@angular/material/dialog';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  user: any;
  _userService: any;
  PatientAppointmentService: any;

  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {

    console.log("asacha");
    this.user = this._userService.getUserDetails();
    this.PatientAppointmentService
      .getPatientAppoinmentList(this.user.id)
      .subscribe((response) => {
        console.log(response);
      
      })
    
      alert('button click');
  }

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // plugins: "calendarPlugins",
    weekends: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-10-20' },
      { title: 'event 2', date: '2021-10-21' }
    ]
  };
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   eventClick:function(arg){
  //   alert(arg.event.title)
  //   alert(arg.event.start)
  //   },
  //   events: [
  //   { title: 'event 1', date: '2021-10-20'},
  //   { title: 'event 1', date: '2021-10-21'},

  //   ]
  //   };

  handleDateClick(arg) {
    const dialogRef = this.dialog.open(ModalPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  openEvent(){
    const dialogRef = this.dialog.open(ModalPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

