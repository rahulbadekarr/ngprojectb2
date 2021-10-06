import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  name = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation('@')
  ]);

  loginForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.loginForm = this.fb.group({
      name : this.name,
      password : this.password
    })
  }

  hasExclamation(symbol: string) : ValidatorFn {
    return function(control : AbstractControl) : ValidationErrors | null{
      const exclamation = control.value.indexOf(symbol) >= 0
      return exclamation ? null : {"exclamationError": true};
    }
  }
onlogin(){
    console.log(this.loginForm);
  }
  ngOnInit(): void {
  }

}
