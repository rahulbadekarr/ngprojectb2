import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-immune-list',
  templateUrl: './patient-immune-list.component.html',
  styleUrls: ['./patient-immune-list.component.css']
})
export class PatientImmuneListComponent implements OnInit {


  constructor(private getimmlist: UserService) { }
  immuneList={};
  ngOnInit(): void {

    this.getimmlist.getImmunizationList().subscribe((result)=>{
      console.log(result)
      this.immuneList=result
    })
  }

}
