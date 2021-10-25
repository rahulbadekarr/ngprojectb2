import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-immunization',
  templateUrl: './patient-immunization.component.html',
  styleUrls: ['./patient-immunization.component.css'],
})
export class PatientImmunizationComponent implements OnInit {
  // [x: string]: any;

  ngOnInit(): void {}

  isSubmitted = false;

  Vaccines: any = [
    'Covishield',
    'Covaxin',
    'Sputnik',
    'TT',
    'Measles',
    'Pentavelant',
    'Vitamin A',
    'BCG',
    'Fluzone Quadrivalent',
  ];

  constructor(public fb: FormBuilder, private addMed: UserService, private _snackBar: CustomSnackBarService,) {}

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    covid_19_vaccine: ['', [Validators.required]],
    general_vaccine: new FormControl(''),
    vaccinedate: new FormControl('',Validators.required),
  });



  // Getter method to access formcontrols
  get covid_19_vaccine() {
    return this.registrationForm.get('covid_19_vaccine');
  }

  collImmune() {
    this.addMed
      .saveImmunization(this.registrationForm.value)
      .subscribe((result) => {
        console.log('result', result);

        if(result){
          this._snackBar.openSnackBar('Added successfully');
        }
        else {
                  this._snackBar.openSnackBar('Invalid data');
                }
        //  if (data === true) {
  //         this._snackBar.openSnackBar('Logged in successfully');
  //         this._router.navigate(['portal']);
  //       } else {
  //         this._snackBar.openSnackBar('Invalid credentials');
  //       }
      });
  }


  // onlogin() {
  //   this._userService
  //     .login(this.username.value, this.userpassword.value)
  //     .subscribe((data) => {
  //       if (data === true) {
  //         this._snackBar.openSnackBar('Logged in successfully');
  //         this._router.navigate(['portal']);
  //       } else {
  //         this._snackBar.openSnackBar('Invalid credentials');
  //       }
  //     });
  // }
}
