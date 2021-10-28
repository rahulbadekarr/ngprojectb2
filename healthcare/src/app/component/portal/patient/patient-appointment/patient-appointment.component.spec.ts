import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EventappointService } from 'src/app/services/eventappoint.service';
import {  MatDialogModule } from '@angular/material/dialog';
import { PatientAppointmentComponent } from './patient-appointment.component';


describe('PatientAppointmentComponent', () => {
  let component: PatientAppointmentComponent;
  let fixture: ComponentFixture<PatientAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppointmentComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule

      ],
      providers: [EventappointService],
    })
    .compileComponents();
    fixture = TestBed.createComponent(PatientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });

  beforeEach(() => {

  });

  it('Is patient appointment component created', () => {
    expect(component).toBeTruthy();
  });
});
