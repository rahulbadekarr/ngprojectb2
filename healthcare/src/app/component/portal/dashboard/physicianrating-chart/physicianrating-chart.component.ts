import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-physicianrating-chart',
  templateUrl: './physicianrating-chart.component.html',
  styleUrls: ['./physicianrating-chart.component.css']
})
export class PhysicianratingChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [
          {
            label: 'Total Visited Patients ',
             data: [10, 30, 35, 30, 20, 25, 28, 29, 30, 26, 34],
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
