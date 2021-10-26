import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProcedureService } from 'src/app/services/procedure.service';
import { procedure_code } from 'src/model/tabletypes';
export interface PeriodicElement {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},

];

@Component({
  selector: 'app-procedurecode',
  templateUrl: './procedurecode.component.html',
  styleUrls: ['./procedurecode.component.css']
})
export class ProcedurecodeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  // dataSource = ELEMENT_DATA;
  [x: string]: any;
  procedureData !: any;
  procedureModelObj:procedure_code = new procedure_code();
  // procedure: Procedure = new Procedure();
 

    // for filter code STARTS from here 
   
    dataSource = new MatTableDataSource(this.procedureData);
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
     // for filter code ENDS from here 
  constructor(private procedure_service: ProcedureService) { }

  ngOnInit(): void {
    this.getAllProcedure();
  }
postProcedureDetails(){
  this.procedureModelObj.procedure_code_id= this.procedureData.value.id; 
  this.procedureModelObj.procedure_code_name = this.procedureData.value.name; 
  
  this.procedure_service.postProcedure(this.procedureModelObj)
  .subscribe(res=>{
    console.log(res);
  })
}
getAllProcedure(): void{
  this.procedure_service.getProcedure()
  .subscribe(res=>{
    this.procedureData = res;
  })
}

}
