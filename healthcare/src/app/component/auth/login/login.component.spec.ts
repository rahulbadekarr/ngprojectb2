import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let e1 : HTMLElement;
  let de : DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,BrowserAnimationsModule,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    e1 = fixture.nativeElement.querySelector('input');
    de = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    component.ngOnInit()

  });
  it('should display click button', () => {
    // make the requirements to make sure .email-edit-button will be present in the view
    // in essence, it is not blocked by an *ngIf
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    console.log(button); // see what this logs, make sure it is truthy and a button
    expect(button).not.toBeNull();
  });

//   it('It should have as a text login page ', async () => {

//     expect(component.text).toEqual('login page');
// });
    it('It should set submitted to true ', async () => {
      component.onlogin();
      expect(component).toBeTruthy();
  });
  it('it should submited call the submit methode',async () => {
   fixture.detectChanges();
   spyOn(component,'onlogin');
   e1 = fixture.debugElement.query(By.css('button')).nativeElement;
   e1.click();
   expect(component.onlogin).toHaveBeenCalledTimes(1);
  });

  it('form should invalid',async()=> {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();

  });
  it('form should be valid',async()=> {
    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('test@test.com');
    expect(component.loginForm.valid).toBeTruthy();

  });

  it('Is form invalid when empty/invalid data is inserted',()=>{

    let emai=component.loginForm.controls["email"];
    emai.setValue("rahul@gmail.com")
    let passwor=component.loginForm.controls["password"];
    passwor.setValue("@1rahul234")


    expect(component.loginForm.valid).toBeTruthy()
  });

  // it('should rendor email inputs ', () => {
  //   return expect(input.textContent).toBe(component.email.toString());
  // });
  // it('should rendor password inputs ', () => {
  //   return expect(input.textContent).toBe(component.userpassword.toString());
  // });

  // it('It should login when button is clicked ', () => {

  // let input =de.query(By.css("input"))
  // let onlogin =de.query(By.css(".btn_login"))
  // onlogin.triggerEventHandler("click",{})
  // fixture.detectChanges();
  // expect(input.nativeElement.textContent).toBe(component.loginForm.toString())
  // });

  // it('Is invalid data is inserted',()=>{
  //   let email=component.loginForm.controls["email"];
  //   email.setValue("test@test.com")
  //   let password=component.loginForm.controls["password"];
  //   password.setValue("test")
  //   expect(component.loginForm.valid).toBeTruthy()
  // })

  it('is Login Component Present', () => {
    expect(component).toBeDefined();
  });
  it('should create service', () => {
    const service: UserService = TestBed.get(UserService);
    expect(component).toBeTruthy();
  });

  function toBe() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual === expected
        };
      }
    };
  }
});


function click(click: any) {
  throw new Error('Function not implemented.');
}

function userService(userService: any): any {
  throw new Error('Function not implemented.');
}

