import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvisitComponent } from './adminvisit.component';

describe('AdminvisitComponent', () => {
  let component: AdminvisitComponent;
  let fixture: ComponentFixture<AdminvisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminvisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
