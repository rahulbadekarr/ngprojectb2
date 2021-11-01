import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createuserForm: FormGroup;
  roles=["Admin","Physician"];
  genderole=["Male","Female"];
  constructor(  private fb: FormBuilder,
    private _userService: UserService,
    private _snackBar: CustomSnackBarService,
    private _route: Router) { }

  ngOnInit(): void {
    console.log(this.createuserForm);
    this.createuserForm = this.fb.group(
      {

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
        userrole: ['', Validators.required],
        genderselection:['', Validators.required],
        address: ['',Validators.required],

      },

    );
  }


  onUsercreate() {
    let userData: Users = new Users();
    userData.email = this.email.value;
    userData.role = this.userrole.value;
    userData.gender = this.genderselection.value;
    userData.password = "test@test.com";
    userData.firstname = this.firstname.value;
    userData.lastname = this.lastname.value;
    userData.phone = this.phone.value;
    userData.dob = this.dateofbirth.value;
    userData.address = this.address.value;
    userData.isActive = true;



    this._userService.addUser(userData).subscribe((data: Users) => {
      if (data) {
          this._snackBar.openSnackBar('User created successfully');
          this._route.navigate(['admin/manageusers'])
      }
    },
    error =>{
      this._snackBar.openSnackBar(error);
    }
    );
  }

  onReset(){
 this.createuserForm.reset();

  }


  get firstname(): AbstractControl {
    return this.createuserForm.get('firstname');
  }

  get lastname(): AbstractControl {
    return this.createuserForm.get('lastname');
  }

  get email(): AbstractControl {
    return this.createuserForm.get('email');
  }

  get phone(): AbstractControl {
    return this.createuserForm.get('phone');
  }

  get dateofbirth(): AbstractControl {
    return this.createuserForm.get('dateofbirth');
  }

  get userrole(): AbstractControl {
    return this.createuserForm.get('userrole');
  }

  get genderselection(): AbstractControl {
    return this.createuserForm.get('genderselection');
  }


  get address(): AbstractControl {
    return this.createuserForm.get('address');
  }



}
