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
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onlogin() {
    this._userService
      .login(this.username.value, this.userpassword.value)
      .subscribe((data) => {
        if (data === true) {
          this._snackBar.openSnackBar('Logged in successfully');
          this._router.navigate(['portal']);
        } else {
          this._snackBar.openSnackBar('Invalid credentials');
        }
      });
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get userpassword(): AbstractControl {
    return this.loginForm.get('password');
  }
}
