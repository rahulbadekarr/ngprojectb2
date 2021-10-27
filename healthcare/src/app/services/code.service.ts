import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private diagnosisdataURL="http://localhost:3004/diognosis_code";

  constructor(private http:HttpClient)
  {}

  postDiognosisCode(data:any){
    return this.http.post<any>(this.diagnosisdataURL,data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }
  getDiognosis(){
    return this.http.get<any>(this.diagnosisdataURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateDiognosis(data:any, id:string){
    return this.http.patch<any>("http://localhost:3004/diognosis_code", +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteDiognosis(diognosis_id:number){
    console.log("from service",diognosis_id)
    return this.http.delete<any>(`${this.diagnosisdataURL}/${diognosis_id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

//   private diognosisdataURL="http://localhost:3004/diognosis_code";


//   constructor(private http:HttpClient) { }

//   getDiognosisData()
//   {
//     return this.http.get(this.diognosisdataURL).pipe(map((res:any)=>
//     {
//       return res;
//     }))
// }

// deleteData(id:any)
// {
//   console.log(id)
//   return this.http.delete(this. diognosisdataURL,id)
// }

// postData(data:any)
// {
//   return this.http.post<any>(this.diognosisdataURL,data).pipe(map((res:any)=>
//   {
//     return res;
//   }))
// }
}
