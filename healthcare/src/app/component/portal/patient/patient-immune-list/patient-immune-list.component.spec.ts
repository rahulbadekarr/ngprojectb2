import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientImmuneListComponent } from './patient-immune-list.component';

describe('PatientImmuneListComponent', () => {
  let component: PatientImmuneListComponent;
  let fixture: ComponentFixture<PatientImmuneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientImmuneListComponent ]
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
