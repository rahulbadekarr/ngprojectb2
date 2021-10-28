import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

import { PatientDemographicsComponent } from './patient-demographics.component';

describe('PatientDemographicsComponent', () => {
  let component: PatientDemographicsComponent;
  let fixture: ComponentFixture<PatientDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDemographicsComponent ],
      imports:[MatSnackBarModule,FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule],
      providers:[UserService,CustomSnackBarService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
