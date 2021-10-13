import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-immunization',
  templateUrl: './patient-immunization.component.html',
  styleUrls: ['./patient-immunization.component.css']
})
export class PatientImmunizationComponent implements OnInit {
  vaccineList: string[] = ['Covishield','Covaxin','Sputnik','TT','Measles','Pentavelant','Vitamin A','BCG','Fluzone Quadrivalent']

  constructor() { }

  ngOnInit(): void {
  }

}
