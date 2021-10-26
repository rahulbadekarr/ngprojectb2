import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemographicsService } from 'src/app/services/demographics.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-physician-information',
  templateUrl: './physician-information.component.html',
  styleUrls: ['./physician-information.component.css']
})
export class PhysicianInformationComponent implements OnInit {

  user: Users = new Users();
  physicianForm: FormGroup;
  constructor(private _userService : UserService, private fb: FormBuilder, private _snackBar: CustomSnackBarService,private _DemographicsService: DemographicsService,) { }

  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
    this.createForm();
    this.physicianForm.patchValue({
      ...this.user,
      dob: new Date(this.user.dob)
    });
  }

  createForm() {
    this.physicianForm = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.minLength(10),
        ],
      ],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    let userDemographics: Users = this.user;
    userDemographics.phone = this.phone.value;
    userDemographics.address = this.address.value;
    this._DemographicsService.createUserDemographics(userDemographics)
        .subscribe((response) => {
          if(response){
            this._snackBar.openSnackBar('Data added successfully!');
          }
        })
  }
  get address(): AbstractControl {
    return this.physicianForm.get('address');
  }
  get phone(): AbstractControl {
    return this.physicianForm.get('phone');
  }
}
