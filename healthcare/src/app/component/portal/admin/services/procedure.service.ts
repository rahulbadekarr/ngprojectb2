import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { procedure_code } from 'src/model/tabletypes';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  procedureUrl = 'http://localhost:3004/procedure_code';

  constructor(private http:HttpClient) { }

  saveProcedure(data:procedure_code){
    return this.http.post(this.procedureUrl,data);
  }

  getProcedure(){
    return this.http.get(this.procedureUrl);
  }

  updateProcedureCode(data : procedure_code){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.procedureUrl}/${data.id}`,
      data,
      {
        headers: headers,
      }
    );
  }

  deleteProcedure(id:string){
    return this.http.delete(`${this.procedureUrl}/${id}`)
  }

  checkProceddureCodeExists(name : string){
    return this.http.get(`${this.procedureUrl}?procedure_code_name=${name}`)
  }
}
