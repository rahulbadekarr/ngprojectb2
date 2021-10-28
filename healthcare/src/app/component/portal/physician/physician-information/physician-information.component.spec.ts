import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { DemographicsService } from 'src/app/services/demographics.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

import { PhysicianInformationComponent } from './physician-information.component';

describe('PhysicianInformationComponent', () => {
  let component: PhysicianInformationComponent;
  let fixture: ComponentFixture<PhysicianInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianInformationComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule,



      ],
      providers:[UserService,CustomSnackBarService,DemographicsService,MatSnackBar]

    })
    .compileComponents();
    fixture = TestBed.createComponent(PhysicianInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
