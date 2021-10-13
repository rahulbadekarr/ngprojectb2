import {AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';




@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']

})

  export class PatientHistoryComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    columns = [
      {
        columnDef: 'position',
        header: 'No.',
        cell: (element: any) => `${element.position}`
      },
      {
        columnDef: 'title',
        header: 'Title',
        cell: (element: any) => `${element.title}`
      },
      {
        columnDef: 'description',
        header: 'Description',
        cell: (element: any) => `${element.description}`
      },
      {
        columnDef: 'appointment_date',
        header: 'Appointment date',
        cell: (element: any) => `${element.appointment_date}`
      },
      {
        columnDef: 'reason',
        header: 'Reason',
        cell: (element: any) => `${element.reason}`
      },
      {
        columnDef: 'time',
        header: 'Time',
        cell: (element: any) => `${element.time}`
      },
      {
        columnDef: 'status',
        header: 'Status',
        cell: (element: any) => `${element.status}`
      },
      {
        columnDef: 'notes',
        header: 'Notes',
        cell: (element: any) => `${element.notes}`
      }
    ];
    displayedColumns = this.columns.map(c => c.columnDef);
    dataSource = new MatTableDataSource([
      {position: 1,title:'Abc',description:"Xyz", appointment_date: '20/10/21',time:"20:20", reason: 1.0079, status: 'H',notes:'hello..'},
      {position: 2,title:'Abc',description:"Xyz", appointment_date: '21/10/21',time:"20:20", reason: 4.0026, status: 'He',notes:'hello..'},
      {position: 3,title:'Abc',description:"Xyz", appointment_date: '22/10/21',time:"20:20", reason: 6.941, status: 'Li',notes:'hello..'},
      {position: 4,title:'Abc',description:"Xyz", appointment_date: '23/10/21',time:"20:20", reason: 9.0122, status: 'Be',notes:'hello..'},
      {position: 5,title:'Abc',description:"Xyz", appointment_date: '24/10/21',time:"20:20", reason: 10.811, status: 'B',notes:'hello..'},
      {position: 6,title:'Abc',description:"Xyz", appointment_date: '25/10/21',time:"20:20", reason: 12.0107, status: 'C',notes:'hello..'},
      {position: 7,title:'Abc',description:"Xyz", appointment_date: '26/10/21',time:"20:20", reason: 14.0067, status: 'N',notes:'hello..'},
      {position: 8,title:'Abc',description:"Xyz", appointment_date: '27/10/21',time:"20:20", reason: 15.9994, status: 'O',notes:'hello..'},
      {position: 9,title:'Abc',description:"Xyz", appointment_date: '28/10/21',time:"20:20", reason: 18.9984, status: 'F',notes:'hello..'},
      {position: 10,title:'Abc',description:"Xyz", appointment_date: '29/10/21',time:"20:20", reason: 20.1797, status: 'Ne',notes:'hello..'},
    ]);
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }



    ngOnInit(): void {

    }









  }
