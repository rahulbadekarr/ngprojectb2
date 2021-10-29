import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';

import { PatientAppointmentComponent } from './patient-appointment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PatientAppointmentComponent', () => {
  let component: PatientAppointmentComponent;
  let fixture: ComponentFixture<PatientAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppointmentComponent ],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,BrowserAnimationsModule,]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentComponent);
    component = fixture.componentInstance;
    const de = fixture.debugElement.query(By.css('form'));
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

  it('it should submited call the toggleWeekends methode',async () => {
    fixture.detectChanges();
    spyOn(component,'toggleWeekends');
    const e1 = fixture.debugElement.query(By.css('button')).nativeElement;
    e1.click();
    expect(component.toggleWeekends).toHaveBeenCalledTimes(1);
   });

   it('it should submited call openEvent  methode',async () => {
    fixture.detectChanges();
    spyOn(component,'openEvent');
    const e1 = fixture.debugElement.query(By.css('button')).nativeElement;
    e1.click();
    expect(component.openEvent).toHaveBeenCalledTimes(0);
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('Is patient appointment component created', () => {
    expect(component).toBeTruthy();
  });
});
