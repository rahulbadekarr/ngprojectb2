import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private fb : FormBuilder, private _userService: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  onlogin(){
    this._userService.login(this.username.value, this.userpassword.value)
    .subscribe(data => console.log(data));
  }

  get username () : AbstractControl {
    return this.loginForm.get('username')
  }

  get userpassword () : AbstractControl {
    return this.loginForm.get('password')
  }
}
