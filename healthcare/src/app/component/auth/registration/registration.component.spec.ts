
import { ComponentFixture, TestBed,async,inject } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { RegistrationComponent } from './registration.component';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';


describe('Registration component ', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async()=>{
    TestBed.configureTestingModule({

      declarations: [RegistrationComponent],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule]

    }).compileComponents();
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
  })

  it('is Registration Component Present', () => {

    expect(component).toBeDefined();
  });

  it('Is form invalid when empty/invalid data is inserted',()=>{
    let fname=component.registerForm.controls["firstname"];
    fname.setValue("rahul")
    let lname=component.registerForm.controls["lastname"];
    lname.setValue("badekar")
    let emai=component.registerForm.controls["email"];
    emai.setValue("rahul@gmail.com")
    let contact=component.registerForm.controls["phone"];
    contact.setValue("9860636766")
    let dob=component.registerForm.controls["dateofbirth"];
    dob.setValue("12-10-1995")
    let passwor=component.registerForm.controls["password"];
    passwor.setValue("@1rahul234")
    let retypepasswor=component.registerForm.controls["retypepassword"];
    retypepasswor.setValue("@1rahul234")
    let addres=component.registerForm.controls["address"];
    addres.setValue("Pune")
    let emergencycontactnam=component.registerForm.controls["emergencycontactname"];
    emergencycontactnam.setValue("raj")
    let emergencycontactemai=component.registerForm.controls["emergencycontactemail"];
    emergencycontactemai.setValue("rajmalhotra@gmail.com")
    let emergencycontactmobil=component.registerForm.controls["emergencycontactmobile"];
    emergencycontactmobil.setValue("9822333426")


    expect(component.registerForm.valid).toBeTruthy()
  })
});
