import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';
import { UserService } from 'src/app/services/user.service';
import { PatientAppointmentService } from 'src/app/services/patient-appointment.service';
import { Users } from 'src/model/tabletypes';
import { EventappointService } from 'src/app/services/eventappoint.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css'],
})
export class PatientAppointmentComponent implements OnInit {
  user: Users = new Users();

  constructor(private evtapp:EventappointService,public dialog: MatDialog) {}
  receivedmessage:any={};
  testevents:any[]=[]

  ngOnInit(): void {

    this.evtapp.getMessage().subscribe((res)=>{
      // console.log(res)
      // console.log(res[0].meeting_title)
      this.testevents=res;
      // this.testevents.push({title:'moh',id:'rkdie',description:'kohn',date:'2021-10-13'})
      console.log(this.testevents)
      this.calendarOptions.events=this.testevents


    })



  }





  @ViewChild('calendar') calendarComponent: FullCalendarComponent;


  // t:any=this.receivedmessage[0].meeting_title
  // td:any=receivedmessage[0].date
  // tdd:any=receivedmessage[0].description

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    selectable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    // events:this.testevents,


  //   [


  //     // { title: this.t, date: this.td, description: this.tdd},
  //     // { title: `${this.receivedmessage[1]?.meeting_title}`, date: `${this.receivedmessage[1]?.date}`, description: `${this.receivedmessage[1]?.description}`
  //     { title: this.receivedmessage[0].meeting_title, date: '2021-10-10', description: this.receivedmessage[0].description},

  //     { title: 'event 1', date: '2021-10-12', description: 'Hello World' },
  //     // { title: 'event 2', date: '2021-10-12', description: this.receivedmessage.description }
  //  ],

    eventClick: (args) => {
      console.log('ash', args.event.start);
      console.log('title', args.event.title);


      let event = {
        title: args.event.title,
        date: args.event.start,
        description: args.event._def.extendedProps.description,
      };
      this.handleDateClick(event);
    },
  };

  handleDateClick(event) {
    const dialogRef = this.dialog.open(ModalPopUpComponent, {
      data: { event },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }
  openEvent() {
    const dialogRef = this.dialog.open(ModalPopUpComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
