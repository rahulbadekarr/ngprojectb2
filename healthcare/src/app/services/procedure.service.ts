import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import {  procedure_code } from 'src/model/tabletypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  // headers =new HttpHeaders().set('Content-Type', 'application/json').set('Accept','appication/json');
  // httpOptions={
  //   headers: this.headers
  // }
  private procedureUrl = 'http://localhost:3004/procedure_cod';

  constructor(private http: HttpClient) { }

  postprocedure_code(data:any){
    return this.http.post<any>(this.procedureUrl,data)

    .pipe(map((res:any)=>{

      return res;

    }))
  }
  getprocedure_code() {
  //  return this.http.get<procedure_code[]>(this.procedureUrl);
   return this.http.get<any>(this.procedureUrl)

   .pipe(map((res:any)=>{

     return res;

   }))
  }
  getupdateprocedure_code(id:string) {
    return this.http.get<any>(this.procedureUrl)

    .pipe(map((res:any)=>{

      return res;

    }))
    }
  updateprocedure_code(proceduer: procedure_code){
    // return this.http.patch<any>("http://localhost:3004/procedure_cod", +id)

    // .pipe(map((res:any)=>{

    //   return res;

    // }))
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.procedureUrl}/${proceduer.id}`,
      proceduer,
      {
        headers: headers,
      }
    );
  }

  deleteprocedure_code(id:string){
    console.log("from service",id)

    return this.http.delete<any>(`${this.procedureUrl}/${id}`)

    .pipe(map((res:any)=>{

      return res;

    }))
  }
}


