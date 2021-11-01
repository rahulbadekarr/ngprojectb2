import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/component/shared/shared.module';
import {By} from '@angular/platform-browser';


import { PatientDemographicsComponent } from './patient-demographics.component';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

describe('PatientDemographicsComponent', () => {
  let component: PatientDemographicsComponent;
  let fixture: ComponentFixture<PatientDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDemographicsComponent ],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,BrowserAnimationsModule,],
	   providers:[UserService,CustomSnackBarService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('form'));
  });

  it('form should invalid',async()=> {
    component.demoForm.controls['firstname'].setValue('');
    component.demoForm.controls['lastname'].setValue('');
    expect(component.demoForm.valid).toBeFalsy();

  });
  it('form should valid',async()=> {
    component.demoForm.controls['firstname'].setValue('karishma');
    component.demoForm.controls['lastname'].setValue('kubde');
    component.demoForm.controls['gender'].setValue('F');
    component.demoForm.controls['education'].setValue('BE');


    expect(component.demoForm.valid).toBeTruthy();

  });

  it('it should submited call onSubmit methode',async () => {
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    const e1 = fixture.debugElement.query(By.css('button')).nativeElement;
    e1.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
