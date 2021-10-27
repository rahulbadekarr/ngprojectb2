import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';
import { EventappointService } from 'src/app/services/eventappoint.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css'],
})
export class PatientAppointmentComponent implements OnInit {

  receivedmessage:any={};
  eventData:any[]=[]
  user: Users = new Users();
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(private evtapp:EventappointService,public dialog: MatDialog, private _userService : UserService) {}

  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
    this.evtapp.getMessage(this.user.id).subscribe((res : any[])=>{
      res.forEach(element => {
        this.eventData.push(element);
      });
      //this.testevents.push({title:'moh',id:'rkdie',description:'kohn',date:'2021-10-13'})
      this.calendarOptions.events=this.eventData
    })
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    selectable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: (args) => {
      let eventObj = {
        title: args.event.title,
        date: args.event.start,
        description: args.event._def.extendedProps.description,
        patient_id: args.event._def.extendedProps.patient_id,
        patient_firstname: args.event._def.extendedProps.patient_firstname,
        patient_lastname: args.event._def.extendedProps.patient_lastname,
        physician_id: args.event._def.extendedProps.physician_id,
        physician_firstname: args.event._def.extendedProps.physician_firstname,
        physician_lastname: args.event._def.extendedProps.physician_lastname,
        time: args.event._def.extendedProps.time,
        status: args.event._def.extendedProps.status,
        id: args.event.id
      };
      this.handleDateClick(eventObj);
    },
  };

  handleDateClick(event) {
    const dialogRef = this.dialog.open(ModalPopUpComponent, {
      data: { event },
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }
  openEvent() {
    const dialogRef = this.dialog.open(ModalPopUpComponent);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
