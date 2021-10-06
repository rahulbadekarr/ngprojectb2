import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  role = ["Admin", "Patient","Physician"]
  // [x: string]: any;
  username = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasAttherate('@')
  ]);
  constructor(private fb : FormBuilder) {
    this.loginForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  hasAttherate(symbol: string) : ValidatorFn {
    return function(control : AbstractControl) : ValidationErrors | null{
      const attherate = control.value.indexOf(symbol) >= 0
      return attherate ? null : {"attherateError": true};
    }
  }
onlogin(){
    console.log(this.loginForm);
  }
  ngOnInit(): void {
  }

}
