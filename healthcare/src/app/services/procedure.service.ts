import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  procedureUrl = 'http://localhost:3004/procedure_cod';

  constructor(private http:HttpClient) { }

  postProcedure(data:any){
    return this.http.post<any>("http://localhost:3004/procedure_cod",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProcedure(){
    return this.http.get<any>("http://localhost:3004/procedure_cod")
    .pipe(map((res:any)=>{
      return res;
    }))
    // console.log('inside services')
    // return this.http.get(`${this.procedureUrl}/${procedure_cod_id} `)
  }
  updateProcedure(data:any, id:number){
    return this.http.patch<any>("http://localhost:3004/procedure_cod",+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProcedure(id:number){
    return this.http.patch<any>("http://localhost:3004/procedure_cod",+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
