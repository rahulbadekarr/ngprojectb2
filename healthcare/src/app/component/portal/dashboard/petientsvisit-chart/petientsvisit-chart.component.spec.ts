import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetientsvisitChartComponent } from './petientsvisit-chart.component';

describe('PetientsvisitChartComponent', () => {
  let component: PetientsvisitChartComponent;
  let fixture: ComponentFixture<PetientsvisitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetientsvisitChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetientsvisitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
