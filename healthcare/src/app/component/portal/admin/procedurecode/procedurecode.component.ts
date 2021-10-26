import { Component, OnInit } from '@angular/core';
import { ProcedureService } from 'src/app/services/procedure.service';
import { procedure_code } from 'src/model/tabletypes';



@Component({
  selector: 'app-procedurecode',
  templateUrl: './procedurecode.component.html',
  styleUrls: ['./procedurecode.component.css']
})
export class ProcedurecodeComponent implements OnInit {

  procedureModelObj:procedure_code = new procedure_code();

  constructor(private procedure_service: ProcedureService) { }

  ngOnInit(): void {
    this.getAllProcedure();
  }

  postProcedureDetails(){
      this.procedureModelObj.id= this.procedureModelObj.id; 
      this.procedureModelObj.name = this.procedureModelObj.name;
      
      this.procedure_service.postProcedure(this.procedureModelObj)
      .subscribe(res=>{
        console.log(res);
      })
    }
    
  getAllProcedure(): void{
    this.procedure_service.getProcedure()
    .subscribe(res=>{
      this.procedure_service = res;
    })
  }
}
