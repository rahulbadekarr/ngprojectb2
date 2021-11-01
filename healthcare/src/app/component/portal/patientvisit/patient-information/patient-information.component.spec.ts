import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

import { PatientInformationComponent } from './patient-information.component';

describe('PatientInformationComponent', () => {
  let component: PatientInformationComponent;
  let fixture: ComponentFixture<PatientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientInformationComponent ],
      providers:[UserService,HttpClientTestingModule, FormBuilder, ReactiveFormsModule,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
