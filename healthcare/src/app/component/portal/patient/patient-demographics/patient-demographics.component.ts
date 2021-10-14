import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemographicsService } from 'src/app/services/demographics.service';
import { Demographics,Users } from 'src/model/tabletypes';
import { UserService } from 'src/app/services/user.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css'],
})
export class PatientDemographicsComponent implements OnInit {
  demoForm: FormGroup;
  genders = ['Male', 'Female'];
  patient: Demographics = new Demographics();
  demodata: Demographics = new Demographics();
  user: Users = new Users();

  constructor(
    private fb: FormBuilder,
    private _DemographicsService: DemographicsService,
    private _userService: UserService,
    private _snackBar: CustomSnackBarService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.user = this._userService.getUserDetails();
    this._DemographicsService
      .getUserDemographics(this.user.id)
      .subscribe((data : Demographics) => {
        this.demoForm.patchValue({
          ...data
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
      ethanicity: ['', Validators.required],
      education: ['', Validators.required],
      occupation: ['', Validators.required],
      address: ['', Validators.required],
      medicalhistory: [''],
      family_medical_history: [''],
      surgery: [''],
      insurance_provider: ['', Validators.required],
      //employeement: ['', Validators.required],
    });
  }

  onSubmit() {
    let userDemographics: Demographics = new Demographics();
    let date = new Date();
    userDemographics = this.demoForm.value;
    userDemographics.patient_id = this.user.id;
    userDemographics.dob = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
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
}
