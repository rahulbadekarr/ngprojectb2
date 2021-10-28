import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

import { PatientImmuneListComponent } from './patient-immune-list.component';

describe('PatientImmuneListComponent', () => {
  let component: PatientImmuneListComponent;
  let fixture: ComponentFixture<PatientImmuneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientImmuneListComponent ],
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule,MatSnackBarModule],
      providers:[UserService,CustomSnackBarService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientImmuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
