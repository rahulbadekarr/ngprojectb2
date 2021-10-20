import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitDetailComponent } from './patient-visit-detail.component';

describe('PatientVisitDetailComponent', () => {
  let component: PatientVisitDetailComponent;
  let fixture: ComponentFixture<PatientVisitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVisitDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
