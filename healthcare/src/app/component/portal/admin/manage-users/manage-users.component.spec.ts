import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from '../services/admin.service';

import { ManageUsersComponent } from './manage-users.component';

describe('ManageUsersComponent', () => {
  let component: ManageUsersComponent;
  let fixture: ComponentFixture<ManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUsersComponent ],
      providers:[UserService,AdminService,CustomSnackBarService],
      imports:[FormBuilder,MatSnackBar,ReactiveFormsModule,]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table ', (done) => {
    expect(component.user).toEqual(component.user);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);

      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('userName');
      expect(headerRow.cells[1].innerHTML).toBe('email');
      expect(headerRow.cells[2].innerHTML).toBe('phone');
      expect(headerRow.cells[3].innerHTML).toBe('gender');
      expect(headerRow.cells[4].innerHTML).toBe('registrationDate');
      expect(headerRow.cells[5].innerHTML).toBe('role');
      expect(headerRow.cells[6].innerHTML).toBe('isActive');

      // Data rows
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('ashraf13506');
      expect(row1.cells[1].innerHTML).toBe('test@test.com');
      expect(row1.cells[2].innerHTML).toBe('89432432432');
      expect(row1.cells[3].innerHTML).toBe('Male');
      expect(row1.cells[4].innerHTML).toBe('01-01-2020');
      expect(row1.cells[5].innerHTML).toBe('admin');
      expect(row1.cells[6].innerHTML).toBe('active');



      done();
    });
  });
});


