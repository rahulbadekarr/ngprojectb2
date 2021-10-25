import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AppointmentTable, Users } from 'src/model/tabletypes';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';
import { Appointments } from 'src/model/Appointment.model';
import { ActivatedRoute } from '@angular/router';
import { PhysicianService } from '../services/physician.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  user: Users = new Users();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataList: MatTableDataSource<any> = new MatTableDataSource();
  columnList: string[];
  statuses = ['In-Progress', 'Scheduled', 'Completed', 'Canceled'];
  dateRangeStart = '';
  dateRangeEnd = '';
  selectedStatus = '';

  constructor(
    private _physicianService: PhysicianService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _snackBar: CustomSnackBarService
  ) {
    this.columnList = [
      'appointmentDate',
      'patientName',
      'physicianName',
      'title',
      'status',
      'actions',
      'view',
    ];
  }

  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
    if (this.user.role === 'Patient') {
      this.columnList.splice(this.columnList.indexOf('patientName'), 1);
    } else if (this.user.role === 'Physician') {
      this.columnList.splice(this.columnList.indexOf('physicianName'), 1);
    }
    this.columnList.splice(this.columnList.indexOf('actions'), 1);
    this._physicianService
      .getPatientAppoinmentList(this.user.id, '', '', this.user.role)
      .subscribe((res) => {
        this.bindGrid(res);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataList.filter = filterValue.trim().toLowerCase();
  }

  filterOnStatus(eventData: string) {
    if (eventData) {
      this._physicianService
        .getPatientAppoinmentList(
          this.user.id,
          '',
          '',
          this.user.role,
          eventData
        )
        .subscribe((res) => {
          this.bindGrid(res);
        });
      if (eventData === 'In-Progress' && !this.columnList.includes('actions')) {
        this.columnList.push('actions');
      }
      if (
        (eventData === 'Completed' || eventData === 'Scheduled' || eventData === 'Canceled') &&
        this.columnList.includes('actions')
      ) {
        this.columnList.splice(this.columnList.indexOf('actions'), 1);
      }
    } else {
      this.dataList.filter = '';
    }
  }

  filterOnDateRange() {
    let datepipe: DatePipe = new DatePipe('en-US');
    this._physicianService
      .getPatientAppoinmentList(
        this.user.id,
        datepipe.transform(this.dateRangeStart, 'MM/dd/yyyy'),
        datepipe.transform(this.dateRangeEnd, 'MM/dd/yyyy'),
        this.user.role
      )
      .subscribe((res) => {
        this.bindGrid(res);
      });
  }

  private bindGrid(res: Appointments[]) {
    this.dataList = new MatTableDataSource(res);
    this.dataList.paginator = this.paginator;
    this.dataList.sort = this.sort;
  }

  onClearFilter() {
    this.dateRangeStart = '';
    this.dateRangeEnd = '';
    this.selectedStatus = '';
    this._physicianService
      .getPatientAppoinmentList(
        this.user.id,
        '',
        '',
        this.user.role,
        'Scheduled'
      )
      .subscribe((res) => {
        this.bindGrid(res);
      });
      if(this.selectedStatus === '' && this.columnList.includes('actions')){
        this.columnList.splice(this.columnList.indexOf('actions'), 1);
      }
      if (this.selectedStatus === 'In-Progress' && !this.columnList.includes('actions')) {
        this.columnList.push('actions');
      }
      if (
        (this.selectedStatus === 'Completed' || this.selectedStatus === 'Scheduled' || this.selectedStatus === 'Canceled') &&
        this.columnList.includes('actions')
      ) {
        this.columnList.splice(this.columnList.indexOf('actions'), 1);
      }

  }

  onAcceptOrReject(appointmentId: string, status: string) {
    this._physicianService
      .getPatientAppointmentDetails(appointmentId)
      .subscribe((resData: AppointmentTable) => {
        if (resData) {
          let data = resData;
          data[0].status = status;
          this._physicianService.updateAppointmentStatus(data).subscribe((data) => {
            if (data) {
              this.onClearFilter();
              if(status === 'Scheduled')
                this._snackBar.openSnackBar('Appointment Scheduled successfully!');
              else
              this._snackBar.openSnackBar('Appointment Canceled successfully!');
            }
          });
        }
      });
  }
}
