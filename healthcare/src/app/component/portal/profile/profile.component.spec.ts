import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [UserService],
    }).compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component.ngOnInit();
  });

  beforeEach(() => {});

  it('Is profile compoenent present', () => {
    expect(component).toBeTruthy();
  });
});
