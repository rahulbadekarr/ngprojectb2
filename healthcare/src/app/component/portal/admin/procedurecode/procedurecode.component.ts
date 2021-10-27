import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcedureService } from 'src/app/services/procedure.service';
import { procedure_code } from 'src/model/tabletypes';
export interface PeriodicElement {
  name: string;
  id: string;
}

@Component({
  selector: 'app-procedurecode',
  templateUrl: './procedurecode.component.html',
  styleUrls: ['./procedurecode.component.css']
})
export class ProcedurecodeComponent implements OnInit {
add_procedure_data_from:FormGroup;

ProcedureCodeObj:procedure_code = new procedure_code();
collecteData:[];

  constructor(private procedureservice: ProcedureService, private fb:FormBuilder) { }

  ngOnInit(): void {
 this.getAllprocedure_code();
 this.add_procedure_data_from=this.fb.group({
   id:['', Validators.required],
   name:['', Validators.required],
 })
  }
  postProcedureDetails(add_procedure_data_from){
console.warn(this.add_procedure_data_from)
this.ProcedureCodeObj=this.add_procedure_data_from.value;
console.warn(this.ProcedureCodeObj)

this.procedureservice.postprocedure_code(this.add_procedure_data_from.value)
.subscribe(res=>{
  console.warn(res);
})
this.getAllprocedure_code();
  }
  getupdateProcedureDetails(add_procedure_data_from){
    console.warn(this.add_procedure_data_from)
    this.ProcedureCodeObj=this.add_procedure_data_from.value;
    console.warn(this.ProcedureCodeObj)
    
    this.procedureservice.getupdateprocedure_code(this.add_procedure_data_from.value)
    .subscribe(res=>{
      console.warn(res);
    })
    this.getAllprocedure_code();

  }
  updatedProcedureDetails(){
    console.warn(this.add_procedure_data_from)
    this.ProcedureCodeObj=this.add_procedure_data_from.value;
    console.warn(this.ProcedureCodeObj)
    
    this.procedureservice.updateprocedure_code(this.ProcedureCodeObj)
    .subscribe(res=>{
      console.warn(res);
    })
    // this.getAllprocedure_code();
  }
deleteRow(id:string){
// this.rs.deleteprocedure_cod(val).subscribe(data =>{
// });
this.procedureservice.deleteprocedure_code(id).subscribe(res=>{
  console.warn("Data Deleted")
  this.getAllprocedure_code();
})
}
getAllprocedure_code(): void{
this.procedureservice.getprocedure_code()
.subscribe(res=>{
  this.collecteData = res;
  console.warn(res)
})
}

 get id(): AbstractControl {    return this.add_procedure_data_from.get('id');}
get name(): AbstractControl {  return this.add_procedure_data_from.get('name');}


}

