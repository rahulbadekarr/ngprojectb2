import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DemographicsService} from 'src/app/services/demographics.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {
  user: Users = new Users();
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
  }
}
