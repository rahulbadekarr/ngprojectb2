import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Phytoviewpatientcal } from 'src/model/tabletypes';


const ELEMENT_DATA: Phytoviewpatientcal[] = [
  { name: 'rahul', date:"2021-10-21", status: 'A'},
  { name: 'sagar', date:"2021-10-21", status: 'A'},
  { name: 'mohan', date:"2021-10-21", status: 'A'},
  { name: 'sudhir', date:"2021-10-21", status: 'I'},
  { name: 'sohan', date:"2021-10-21", status: 'A'},
  { name: 'mono', date:"2021-10-21", status: 'A'},


];

@Component({
  selector: 'app-phytoviewpatient',
  templateUrl: './phytoviewpatient.component.html',
  styleUrls: ['./phytoviewpatient.component.css']
})
export class PhytoviewpatientComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
