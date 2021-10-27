import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { AdminUsers } from 'src/model/admin-users-list.model';
import { Users } from 'src/model/tabletypes';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  user: Users = new Users();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataList: MatTableDataSource<any> = new MatTableDataSource();
  columnList: string[];
  dateRangeStart = '';
  dateRangeEnd = '';
  roles = ['Physician', 'Admin', 'Patient'];
  selectedRoles = '';

  constructor(
    private _userService: UserService,
    private _adminService: AdminService,
    private _snackBar: CustomSnackBarService
  ) {
    this.columnList = [
      'userName',
      'email',
      'phone',
      'gender',
      'registrationDate',
      'role',
      'isActive',
    ];
  }

  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
    this._adminService.getUsers(this.user.id, '', '').subscribe((res) => {
      this.bindGrid(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataList.filter = filterValue.trim().toLowerCase();
  }

  filterOnStatus(eventData: string) {
    if (eventData) {
      this.dataList.filter = eventData.trim().toLowerCase();
    } else {
      this.dataList.filter = '';
    }
  }

  filterOnDateRange() {
    let datepipe: DatePipe = new DatePipe('en-US');
    this._adminService
      .getUsers(
        this.user.id,
        datepipe.transform(this.dateRangeStart, 'MM/dd/yyyy'),
        datepipe.transform(this.dateRangeEnd, 'MM/dd/yyyy')
      )
      .subscribe((res) => {
        this.bindGrid(res);
      });
  }

  private bindGrid(res: AdminUsers[]) {
    console.log(res);
    this.dataList = new MatTableDataSource(res);
    this.dataList.paginator = this.paginator;
  }

  onClearFilter() {
    this.dateRangeStart = '';
    this.dateRangeEnd = '';
    this.selectedRoles = '';
    this._adminService.getUsers(this.user.id, '', '').subscribe((res) => {
      this.bindGrid(res);
    });
  }

  changeAccess(id: string, access: boolean) {
    this._adminService.getUser(id).subscribe((data: Users) => {
      if (data[0]) {
        data[0].isActive = !access;
        this._adminService.updatedUserAccess(data[0]).subscribe((res) => {
          if (res) {
            this._adminService.getUsers(this.user.id, '', '').subscribe((res) => {
              this.bindGrid(res);
            });
            this._snackBar.openSnackBar('Updated successfully!');
          } else {
            this._snackBar.openSnackBar('Error occurred while updating!');
          }
        });
      }
    });
  }
}
