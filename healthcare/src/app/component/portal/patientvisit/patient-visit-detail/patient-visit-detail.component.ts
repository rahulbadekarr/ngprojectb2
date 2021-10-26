import { Component, OnInit } from '@angular/core';
import { PatientvisitService } from 'src/app/services/patientvisit.service';

@Component({
  selector: 'app-patient-visit-detail',
  templateUrl: './patient-visit-detail.component.html',
  styleUrls: ['./patient-visit-detail.component.css'],
})

export class PatientVisitDetailComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    // this.patientvisit.getpatientvisit();

  }
}
