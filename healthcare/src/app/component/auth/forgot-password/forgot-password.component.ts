import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phoneNoPattern = "^(\+\d{1,3}[- ]?)?\d{10}$";

  email = new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.pattern(this.emailPattern)
  ]);
  phone = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
   // Validators.maxLength(10),
    //Validators.pattern(this.phoneNoPattern)

  ]);
  forgotusernameForm : FormGroup;
  constructor(private fb : FormBuilder) {
    this.forgotusernameForm = this.fb.group({
      email : this.email,
      phone : this.phone,
     
    })
  }
  
  onRegister(){
    console.log(this.forgotusernameForm);
  }

 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

