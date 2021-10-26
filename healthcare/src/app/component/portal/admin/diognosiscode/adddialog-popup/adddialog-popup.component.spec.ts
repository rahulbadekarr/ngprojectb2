import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddialogPopupComponent } from './adddialog-popup.component';

describe('AdddialogPopupComponent', () => {
  let component: AdddialogPopupComponent;
  let fixture: ComponentFixture<AdddialogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddialogPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
