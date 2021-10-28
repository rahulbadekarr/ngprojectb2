import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianChartComponent } from './physician-chart.component';

describe('PhysicianChartComponent', () => {
  let component: PhysicianChartComponent;
  let fixture: ComponentFixture<PhysicianChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
