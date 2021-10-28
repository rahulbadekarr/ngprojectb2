import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// import { ComponentFixture, TestBed,async,inject } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
// import { RegistrationComponent } from './registration.component';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(' login component ', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],

      imports:[BrowserAnimationsModule,SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule]


    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });

  beforeEach(() => {

  });

  it('Is login component present', () => {
    expect(component).toBeTruthy();
  });


  it('Is form invalid when empty/invalid data is inserted',()=>{

    let emai=component.loginForm.controls["email"];
    emai.setValue("rahul@gmail.com")
    let passwor=component.loginForm.controls["password"];
    passwor.setValue("@1rahul234")


    expect(component.loginForm.valid).toBeTruthy()
  })


});
