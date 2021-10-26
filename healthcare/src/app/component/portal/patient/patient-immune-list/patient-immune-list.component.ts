import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-patient-immune-list',
  templateUrl: './patient-immune-list.component.html',
  styleUrls: ['./patient-immune-list.component.css'],
})
export class PatientImmuneListComponent implements OnInit {
  displayedColumns: string[] = ['Vaccine', 'Other', 'Date', 'Delete'];
  // dataSource = ELEMENT_DATA;
  dataList: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private getimmlist: UserService,
    private _snackBar: CustomSnackBarService
  ) {}
  // immuneList={};
  // subscrip:Subscription;
  ngOnInit(): void {
    // this.subscrip=this.getimmlist.ref$.subscribe(()=>{
    //   this.getimmlist.getImmunizationList()
    // })
    this.getimmlist.getImmunizationList().subscribe((result) => {
      console.log(result);
      // this.immuneList=result
      this.dataList = new MatTableDataSource(result);
    });
  }

  deleteImmune(item) {
    this.getimmlist.deleteImmun(item).subscribe((res) => {
      console.log(res);
      if (res) {
        this._snackBar.openSnackBar('Deleted successfully');
      } else {
        this._snackBar.openSnackBar('Invalid Operation');
      }
    });
  }
}
