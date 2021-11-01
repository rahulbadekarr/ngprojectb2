import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { PhysicianService } from '../services/physician.service';

import { AppointmentListComponent } from './appointment-list.component';

describe('AppointmentListComponent', () => {
  let component: AppointmentListComponent;
  let fixture: ComponentFixture<AppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,MatSnackBarModule],
      providers:[
        PhysicianService,
         UserService,

        CustomSnackBarService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
