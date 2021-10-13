import {AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PatientService } from 'src/app/services/patient.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']

})

  export class PatientHistoryComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource = new MatTableDataSource();

    constructor(private _patientService: PatientService) {
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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

      this._patientService.getPatientAppoinmentList("U510nSm")
      .subscribe(res => {
        let obj = new MatTableDataSource();
        obj.data = res
        this.dataSource = obj
      });

    }

  }
