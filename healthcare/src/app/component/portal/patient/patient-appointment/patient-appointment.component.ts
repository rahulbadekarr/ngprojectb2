import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent,CalendarOptions} from '@fullcalendar/angular';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatDialog} from '@angular/material/dialog';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';
import { UserService } from 'src/app/services/user.service';
import { PatientAppointmentService } from 'src/app/services/patient-appointment.service';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  
  user: Users = new Users();
 

  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {

 
  }

 
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
 
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
   selectable:true,
   dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-10-10',description: 'Hello World'},
      { title: 'event 2', date: '2021-10-12',description: 'Welcome World'}
    ],

    eventClick: (args) => {
      console.log("ash",args.event.start);
      console.log("title",args.event.title);
      let event = { title: args.event.title, date: args.event.start, description: args.event._def.extendedProps.description }
      this.handleDateClick(event)

    }
    
    
  };
 

  handleDateClick(event) {
    const dialogRef = this.dialog.open(ModalPopUpComponent,{
      data : {event}
    });

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

