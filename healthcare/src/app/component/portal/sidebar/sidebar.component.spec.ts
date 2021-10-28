import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';


import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
let c:ChangeDetectorRef;
let m:MediaMatcher;
let u:UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[UserService,]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

    // fixture.detectChanges();
    // component.user.role
  });

  it('should create', () => {
    const side=new SidebarComponent(c,m,u)
    side.user.role

    expect(component).toBeTruthy();
  });
});
