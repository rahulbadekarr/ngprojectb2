import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhytoviewpatientComponent } from './phytoviewpatient.component';

describe('PhytoviewpatientComponent', () => {
  let component: PhytoviewpatientComponent;
  let fixture: ComponentFixture<PhytoviewpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhytoviewpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhytoviewpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
