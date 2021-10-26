import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmanaguserComponent } from './rmanaguser.component';

describe('RmanaguserComponent', () => {
  let component: RmanaguserComponent;
  let fixture: ComponentFixture<RmanaguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmanaguserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmanaguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
