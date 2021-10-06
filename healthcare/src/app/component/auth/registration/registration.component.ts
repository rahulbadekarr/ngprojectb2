import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstname = new FormControl('',[
    Validators.required,
  ]);
  lastname = new FormControl('',[
    Validators.required,
  ]);
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    this.hasExclamation('@')
  ]);
  retypepassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation('@')
  ]);

  registerForm : FormGroup;
  role = ["Admin", "Patient","Physician"]

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      firstname : this.firstname,
      lastname : this.lastname,
      password : this.password,
      retypepassword : this.retypepassword,
      // phone : this.phone,
      // date : this.date,
      role : new FormControl('', Validators.required),
    })
  }

  hasExclamation(symbol: string) : ValidatorFn {
    return function(control : AbstractControl) : ValidationErrors | null{
      const exclamation = control.value.indexOf(symbol) >= 0
      return exclamation ? null : {"exclamationError": true};
    }
  }

  onRegister(){
    console.log(this.registerForm);
  }
  ngOnInit(): void {
  }

}

