import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientImmunizationComponent } from './patient-immunization.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from 'src/app/component/shared/shared.module';


describe('PatientImmunizationComponent', () => {
  let component: PatientImmunizationComponent;
  let fixture: ComponentFixture<PatientImmunizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientImmunizationComponent ],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PatientImmunizationComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PatientImmunizationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('is Petient Immunization Component Present', () => {

    expect(component).toBeDefined();
  });

  it('Is form invalid when empty/invalid data is inserted',()=>{
    let cvaccine=component.registrationForm.controls["covid_19_vaccine"];
    cvaccine.setValue("Covishield")
    let vdate=component.registrationForm.controls["vaccinedate"];
    vdate.setValue("12-10-1995")
    let genralvaccine=component.registrationForm.controls["general_vaccine"];
    genralvaccine.setValue("covishield")


    expect(component.registrationForm.valid).toBeTruthy()
  })

});
