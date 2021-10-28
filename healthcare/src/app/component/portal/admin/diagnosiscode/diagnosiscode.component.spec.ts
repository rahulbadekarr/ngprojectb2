import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DiagnosisService } from '../services/diagnosis.service';

import { DiagnosiscodeComponent } from './diagnosiscode.component';

describe('DiagnosiscodeComponent', () => {
  let component: DiagnosiscodeComponent;
  let fixture: ComponentFixture<DiagnosiscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosiscodeComponent ],
      imports:[MatDialogModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule,MatSnackBarModule],
      providers:[DiagnosisService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosiscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
