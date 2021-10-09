import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Demographics, Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm : FormGroup;
  roles = ["Patient","Physician"]

  constructor(private fb : FormBuilder, private _userService : UserService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      password : ['',[Validators.required, Validators.minLength(8)]],
      retypepassword : ['',[Validators.required, Validators.minLength(8)]],
      email : ['',[Validators.required, Validators.email]],
      phone : ['',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(10)]],
      dateofbirth : ['',Validators.required],
      role : new FormControl('', Validators.required),
    })
  }

  onRegister(){
    let userData : Users = new Users();
    userData.email = this.email.value;
    userData.role = this.role.value;
    userData.password = this.password.value;

    let userDemographics : Demographics = new Demographics();
    userDemographics.first_name = this.firstname.value
    userDemographics.last_name = this.lastname.value
    userDemographics.mobile = this.phone.value
    userDemographics.dob = this.dateofbirth.value

    this._userService.registerUser(userData)
    .subscribe((data : Users) => {
      if (data) {
        userDemographics.patient_id = data.id;
        this._userService.createUserDemographics(userDemographics)
            .subscribe(data => console.log(data))
      }
    });
  }

  get firstname () : AbstractControl {
    return this.registerForm.get('firstname')
  }

  get lastname () : AbstractControl {
    return this.registerForm.get('lastname')
  }

  get password () : AbstractControl {
    return this.registerForm.get('password')
  }

  get retypepassword () : AbstractControl {
    return this.registerForm.get('retypepassword')
  }

  get email () : AbstractControl {
    return this.registerForm.get('email')
  }

  get phone () : AbstractControl {
    return this.registerForm.get('phone')
  }

  get dateofbirth () : AbstractControl {
    return this.registerForm.get('dateofbirth')
  }

  get role () : AbstractControl {
    return this.registerForm.get('role')
  }
}

