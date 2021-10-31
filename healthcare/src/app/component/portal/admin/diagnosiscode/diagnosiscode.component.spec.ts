import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { DiagnosisService } from '../services/diagnosis.service';

import { DiagnosiscodeComponent } from './diagnosiscode.component';

describe('DiagnosiscodeComponent', () => {
  let component: DiagnosiscodeComponent;
  let fixture: ComponentFixture<DiagnosiscodeComponent>;
  let e1 : HTMLElement;
  let de : DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosiscodeComponent ],
      imports:[MatDialogModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule,MatSnackBarModule],
      providers:[DiagnosisService,CustomSnackBarService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosiscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    e1 = fixture.nativeElement.querySelector('input');
    de = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    component.ngOnInit()
  });
  it('should display click button', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    console.log(button)
    expect(button).not.toBeNull();
  });

  it('it save method when detected',async () => {
    fixture.detectChanges();
    spyOn(component,'saveDiagnosisCode').and.callFake;
    e1 = fixture.debugElement.query(By.css('mat-raised-button')).nativeElement.click();
    expect(component.saveDiagnosisCode).toHaveBeenCalledTimes(1);
   });


   it('form should be Valid',async()=> {
    component.diagnosisForm.controls['diagnosis_code_name'].setValue('');

    expect(component.diagnosisForm.valid).toBeFalsy();

  });

  it('form should be inValid',async()=> {
    component.diagnosisForm.controls['diagnosis_code_name'].setValue(null);

    expect(component.diagnosisForm.valid).toBeFalsy();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
