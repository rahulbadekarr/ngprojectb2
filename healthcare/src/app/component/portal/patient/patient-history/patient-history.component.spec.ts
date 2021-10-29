import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/component/shared/shared.module';
import {By} from '@angular/platform-browser';


import { PatientHistoryComponent } from './patient-history.component';
import { UserService } from 'src/app/services/user.service';
import { PatientService } from 'src/app/services/patient.service';

describe('PatientHistoryComponent', () => {
  let component: PatientHistoryComponent;
  let fixture: ComponentFixture<PatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHistoryComponent ],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,BrowserAnimationsModule,FormsModule,],
	   providers:[PatientService,UserService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('it should onClearFilter methode',async () => {
    fixture.detectChanges();
    spyOn(component,'onClearFilter');
    const e1 = fixture.debugElement.query(By.css('button')).nativeElement;
    e1.click();
    expect(component.onClearFilter).toHaveBeenCalledTimes(0);
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
