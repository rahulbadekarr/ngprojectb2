import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedurecodeComponent } from './procedurecode.component';

describe('ProcedurecodeComponent', () => {
  let component: ProcedurecodeComponent;
  let fixture: ComponentFixture<ProcedurecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedurecodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
