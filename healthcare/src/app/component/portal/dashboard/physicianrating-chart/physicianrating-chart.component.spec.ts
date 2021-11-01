import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianratingChartComponent } from './physicianrating-chart.component';

describe('PhysicianratingChartComponent', () => {
  let component: PhysicianratingChartComponent;
  let fixture: ComponentFixture<PhysicianratingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianratingChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianratingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
