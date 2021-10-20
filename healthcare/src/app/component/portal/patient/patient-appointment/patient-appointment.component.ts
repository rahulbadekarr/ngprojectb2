import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent,CalendarOptions } from '@fullcalendar/angular';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // plugins: "calendarPlugins",
    weekends: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-04-01' },
      { title: 'event 2', date: '2021-04-02' }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
}
