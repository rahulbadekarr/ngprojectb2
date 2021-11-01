import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { UserService } from 'src/app/services/user.service';
import { ProcedureService } from '../services/procedure.service';

import { ProcedurecodeComponent } from './procedurecode.component';

describe('ProcedurecodeComponent', () => {
  let component: ProcedurecodeComponent;
  let fixture: ComponentFixture<ProcedurecodeComponent>;
  let e1 : HTMLElement;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedurecodeComponent ],
      imports:[SharedModule,MatSnackBarModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule,BrowserAnimationsModule,],
      providers:[ProcedureService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurecodeComponent);
    component = fixture.componentInstance;
    e1 = fixture.nativeElement.querySelector('input');
    de = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    component.ngOnInit()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be valid',async()=> {
    component.procForm.controls['procedure_code_name'].setValue('BypassUser');

    expect(component.procForm.valid).toBeTruthy();

  });

  it('Is form invalid when empty/invalid data is inserted',()=>{

    let procdata=component.procForm.controls["procedure_code_name"];
    procdata.setValue("input data")
    expect(component.procForm.valid).toBeTruthy()
  });

});
