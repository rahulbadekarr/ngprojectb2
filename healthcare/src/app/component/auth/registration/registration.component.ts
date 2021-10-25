import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
// import { Demographics, Users } from 'src/model/tabletypes';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  //roles = ['Patient', 'Physician'];

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _snackBar: CustomSnackBarService
  ) {}

  ngOnInit(): void {
    console.log(this.registerForm);
    this.registerForm = this.fb.group(
      {
        //username: ['', [Validators.required, this.validateUsername.bind(this)]],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern('^(0|[1-9][0-9]*)$'),
            Validators.minLength(10),
          ],
        ],
        dateofbirth: ['', Validators.required],
        //role: new FormControl('', Validators.required),
        password: ['', [Validators.required, Validators.minLength(8)]],
        retypepassword: ['', [Validators.required]],
        address: ['',Validators.required],
        emergencycontactname: ['', Validators.required],
        emergencycontactemail: ['', [Validators.required, Validators.email]],
        emergencycontactmobile: ['', [
          Validators.required,
          Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.minLength(10),
        ]]
      },
      {
        validator: this.MustMatch('password', 'retypepassword'),
      }
    );
  }

  onRegister() {
    let userData: Users = new Users();
    userData.email = this.email.value;
    userData.role = "Patient";
    userData.password = this.password.value;
    //userData.username = this.username.value;

    // let userDemographics: Demographics = new Demographics();
    // userDemographics.firstname = this.firstname.value;
    // userDemographics.lastname = this.lastname.value;
    // userDemographics.phone = this.phone.value;
    // userDemographics.dob = this.dateofbirth.value;
    // userDemographics.address = this.address.value;
    // userDemographics.emergency_contact_name = this.emergencycontactname.value;
    // userDemographics.emergency_contact_email = this.emergencycontactemail.value;
    // userDemographics.emergency_contact_mobile = this.emergencycontactmobile.value

    userData.firstname = this.firstname.value;
    userData.lastname = this.lastname.value;
    userData.phone = this.phone.value;
    userData.dob = this.dateofbirth.value;
    userData.address = this.address.value;
    userData.emergency_contact_name = this.emergencycontactname.value;
    userData.emergency_contact_email = this.emergencycontactemail.value;
    userData.emergency_contact_mobile = this.emergencycontactmobile.value


    this._userService.registerUser(userData).subscribe((data: Users) => {
      if (data) {
          this._snackBar.openSnackBar('Registered successfully');
        // userDemographics.patient_id = data.id;
        // this._userService
        //   .createUserDemographics(userDemographics)
        //   .subscribe((data) => {
        //     if (data) {
        //       this._snackBar.openSnackBar('Registered successfully');
        //     }
        //   });
      }
    },
    error =>{
      this._snackBar.openSnackBar(error);
    }
    );
  }

  // get username(): AbstractControl {
  //   return this.registerForm.get('username');
  // }

  get firstname(): AbstractControl {
    return this.registerForm.get('firstname');
  }

  get lastname(): AbstractControl {
    return this.registerForm.get('lastname');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get retypepassword(): AbstractControl {
    return this.registerForm.get('retypepassword');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get phone(): AbstractControl {
    return this.registerForm.get('phone');
  }

  get dateofbirth(): AbstractControl {
    return this.registerForm.get('dateofbirth');
  }

  // get role(): AbstractControl {
  //   return this.registerForm.get('role');
  // }

  get emergencycontactname(): AbstractControl {
    return this.registerForm.get('emergencycontactname');
  }

  get emergencycontactemail(): AbstractControl {
    return this.registerForm.get('emergencycontactemail');
  }

  get emergencycontactmobile(): AbstractControl {
    return this.registerForm.get('emergencycontactmobile');
  }

  get address(): AbstractControl {
    return this.registerForm.get('address');
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // private validateUsername(control: AbstractControl) {
  //   const val = control.value;
  //   return this._userService
  //     .validateUserName(val)
  //     .subscribe((data: boolean) => {
  //       return data ? control.setErrors(null) : control.setErrors({"UserExistsError": true});
  //     });
  // }
}
