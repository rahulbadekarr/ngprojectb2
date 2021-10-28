import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemographicsService } from 'src/app/services/demographics.service';
// import { Demographics,Users } from 'src/model/tabletypes';
import { Users } from 'src/model/tabletypes';
import { UserService } from 'src/app/services/user.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css'],
})
export class PatientDemographicsComponent implements OnInit {
  demoForm: FormGroup;
  genders = ['Male', 'Female'];
  // patient: Demographics = new Demographics();
  // demodata: Demographics = new Demographics();
  user: Users = new Users();
  showloader: Boolean=false;

  constructor(
    private fb: FormBuilder,
    private _DemographicsService: DemographicsService,
    private _userService: UserService,
    private _snackBar: CustomSnackBarService
  ) {}

  ngOnInit(): void {
    this.showloader=true;
    this.createForm();
    this.showloader= false;
    this.user = this._userService.getUserDetails();
    this._DemographicsService
      .getUserDemographics(this.user.id)
      .subscribe((data : Users) => {
        this.demoForm.patchValue({
          ...data,
          dob: new Date(data.dob)
        });
      })

  }

  createForm() {
    this.demoForm = this.fb.group({
      id : [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.minLength(10),
        ],
      ],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      ethanicity: [''],
      education: [''],
      occupation: ['', Validators.required],
      address: ['', Validators.required],
      medicalhistory: [''],
      family_medical_history: [''],
      surgery: [''],
      insurance_provider: ['', Validators.required],
      emergency_contact_name: ['', Validators.required],
      emergency_contact_email: ['', [Validators.required, Validators.email]],
      emergency_contact_mobile: ['', [
          Validators.required,
          Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.minLength(10),
        ]]
      //employeement: ['', Validators.required],
    });
  }

  onSubmit() {
    let userDemographics: Users = new Users();
    userDemographics = this.demoForm.value;
    // userDemographics.patient_id = this.user.id;
    userDemographics.dob = new DatePipe('en-US').transform(this.dob.value, 'MM/dd/yyyy');
    this._DemographicsService.createUserDemographics(userDemographics)
        .subscribe((response) => {
          if(response){
            this._snackBar.openSnackBar('Data added successfully!');
          }
        })
  }

  get firstname(): AbstractControl {
    return this.demoForm.get('firstname');
  }

  get lastname(): AbstractControl {
    return this.demoForm.get('lastname');
  }

  get gender(): AbstractControl {
    return this.demoForm.get('gender');
  }

  get dob(): AbstractControl {
    return this.demoForm.get('dob');
  }
  get ethanicity(): AbstractControl {
    return this.demoForm.get('ethanicity');
  }

  get education(): AbstractControl {
    return this.demoForm.get('education');
  }
  get address(): AbstractControl {
    return this.demoForm.get('address');
  }
  // get employeement(): AbstractControl {
  //   return this.demoForm.get('employeement');
  // }
  get phone(): AbstractControl {
    return this.demoForm.get('phone');
  }
  get medicalhistory(): AbstractControl {
    return this.demoForm.get('medicalhistory');
  }
  get family_medical_history(): AbstractControl {
    return this.demoForm.get('family_medical_history');
  }
  get surgery(): AbstractControl {
    return this.demoForm.get('surgery');
  }
  get insurance_provider(): AbstractControl {
    return this.demoForm.get('insurance_provider');
  }
  get emergency_contact_name(): AbstractControl {
    return this.demoForm.get('emergency_contact_name');
  }
  get emergency_contact_email(): AbstractControl {
    return this.demoForm.get('emergency_contact_email');
  }
  get emergency_contact_mobile(): AbstractControl {
    return this.demoForm.get('emergency_contact_mobile');
  }
}
