import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunization-details',
  templateUrl: './immunization-details.component.html',
  styleUrls: ['./immunization-details.component.css']
})
export class ImmunizationDetailsComponent implements OnInit {
  vaccineList: string[] = ['Covishield','Covaxin','Sputnik','TT','Measles','Pentavelant','Vitamin A','BCG','Fluzone Quadrivalent']


  constructor() { }

  ngOnInit(): void {
  }

}
