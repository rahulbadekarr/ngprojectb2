import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiognosiscodeComponent } from './diognosiscode.component';

describe('DiognosiscodeComponent', () => {
  let component: DiognosiscodeComponent;
  let fixture: ComponentFixture<DiognosiscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiognosiscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiognosiscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
