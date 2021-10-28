import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';

import { PatientHistoryComponent } from './patient-history.component';

describe('PatientHistoryComponent', () => {
  let component: PatientHistoryComponent;
  let fixture: ComponentFixture<PatientHistoryComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHistoryComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule
      ],
      providers:[PatientService,UserService]

    })
    .compileComponents();
    fixture = TestBed.createComponent(PatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit(

    )
    // component.filterOnDateRange()
    // component.onClearFilter()
    // // component.filterOnStatus(event)
    // component.applyFilter(event)
  });

  beforeEach(() => {

  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
