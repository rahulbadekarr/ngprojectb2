import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import {By} from '@angular/platform-browser';


import { PatientImmuneListComponent } from './patient-immune-list.component';
import { DebugElement } from '@angular/core';

describe('PatientImmuneListComponent', () => {
  let component: PatientImmuneListComponent;
  let fixture: ComponentFixture<PatientImmuneListComponent>;
  let e1 : HTMLElement;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientImmuneListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,MatSnackBarModule,],
      providers:[CustomSnackBarService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientImmuneListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
