import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PatientOrderComponent } from './patient-order.component';

describe('PatientOrderComponent', () => {
  let component: PatientOrderComponent;
  let fixture: ComponentFixture<PatientOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientOrderComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
