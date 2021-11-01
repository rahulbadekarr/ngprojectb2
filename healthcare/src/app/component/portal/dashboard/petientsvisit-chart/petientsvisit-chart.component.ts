import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { PatientsvisitsService } from 'src/app/component/portal/dashboard/services/patientsvisits.service';
import { Appointments } from 'src/model/Appointment.model';
import { Order, Users } from 'src/model/tabletypes';


@Component({
  selector: 'app-petientsvisit-chart',
  templateUrl: './petientsvisit-chart.component.html',
  styleUrls: ['./petientsvisit-chart.component.css']
})
export class PetientsvisitChartComponent implements OnInit {
  userModelobj:Appointments=new Appointments;
  user: Users = new Users();
  order: Order = new Order();

  constructor(private http: HttpClient, private patientsvisitservice: PatientsvisitsService) {

   }

  ngOnInit(): void {
    // this.order = this.patientsvisitservice.getpatientvisit();
    // this.order = this.patientsvisitservice.getpatientvisit();
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [
          {
            label: 'Total Visited Patients ',
             data: [1,3,0,1,2],
            // data:'this.patientsvisitservice.getusersdata;',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            fill: true,
        }],
          labels: ['May 2021','Jun 2021', 'July 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021']
      },
  });
  }
}
