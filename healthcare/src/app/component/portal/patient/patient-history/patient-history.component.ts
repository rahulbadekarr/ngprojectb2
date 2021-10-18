import {AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PatientService } from 'src/app/services/patient.service';
import { MatSort } from '@angular/material/sort';
import { Users } from 'src/model/tabletypes';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']

})

  export class PatientHistoryComponent implements OnInit, AfterViewInit {

    user: Users = new Users();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource = new MatTableDataSource();

    constructor(private _patientService: PatientService,private _userService: UserService,) {
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;

    }

    columns = [
      {
        columnDef: 'meeting_title',
        header: 'Title',
        cell: (element: any) => `${element.meeting_title}`
      },
      {
        columnDef: 'description',
        header: 'Description',
        cell: (element: any) => `${element.description}`
      },
      {
        columnDef: 'date',
        header: 'Appointment date',
        cell: (element: any) => `${element.date}`
      },
      {
        columnDef: 'time',
        header: 'Time',
        cell: (element: any) => `${element.time}`
      },
      {
        columnDef: 'reason',
        header: 'Reason',
        cell: (element: any) => `${element.reason}`
      },
      {
        columnDef: 'status',
        header: 'Status',
        cell: (element: any) => `${element.status}`
      }
    ];
    displayedColumns = this.columns.map(c => c.columnDef);

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit(): void {
      this.user = this._userService.getUserDetails();
      this._patientService.getPatientAppoinmentList(this.user.id)
      .subscribe(res => {
        let obj = new MatTableDataSource();
        obj.data = res
        this.dataSource = obj
        this.dataSource.sort = this.sort;
      });

    }



  }
