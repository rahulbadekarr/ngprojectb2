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

  export class PatientHistoryComponent implements OnInit {

    user: Users = new Users();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;

    dataList : MatTableDataSource<any>;
    columnList: string[]

    constructor(private _patientService: PatientService,private _userService: UserService,) {
      this.columnList = ["appointmentDate","patientName","physicianName","title","status","actions"]
    }

    ngOnInit(): void {
      this.user = this._userService.getUserDetails();
      if(this.user.role === "Patient"){
        this.columnList.splice(this.columnList.indexOf("patientName"),1)
      }else if(this.user.role === "Physician"){
        this.columnList.splice(this.columnList.indexOf("physicianName"),1)
      }
      this._patientService.getPatientAppoinmentList(this.user.id)
      .subscribe(res => {
        this.dataList = new MatTableDataSource(res);
        this.dataList.paginator = this.paginator;
        this.dataList.sort = this.sort;
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataList.filter = filterValue.trim().toLowerCase();
    }
  }
