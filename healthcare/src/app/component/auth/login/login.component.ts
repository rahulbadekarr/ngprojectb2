import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _snackBar: CustomSnackBarService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onlogin() {
    this._userService
      .login(this.email.value, this.userpassword.value)
      .subscribe((data) => {
        if (data) {
          this._snackBar.openSnackBar('Logged in successfully');
          this._router.navigate(['portal']);
        }
      },
      error =>{
        this._snackBar.openSnackBar(error);
      }
      );
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get userpassword(): AbstractControl {
    return this.loginForm.get('password');
  }
}
