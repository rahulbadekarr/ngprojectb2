import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosiscodeComponent } from './diagnosiscode.component';

describe('DiagnosiscodeComponent', () => {
  let component: DiagnosiscodeComponent;
  let fixture: ComponentFixture<DiagnosiscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosiscodeComponent ]
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
