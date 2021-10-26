import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  private diognosisdataURL="http://localhost:3004/diognosis_code";


  constructor(private http:HttpClient) { }

  getDiognosisData()
  {
    return this.http.get(this.diognosisdataURL).pipe(map((res:any)=>
    {
      return res;
    }))
}

deleteData(id:any)
{
  console.log(id)
  return this.http.delete(this. diognosisdataURL,id)
}

postData(data:any)
{
  return this.http.post<any>(this.diognosisdataURL,data).pipe(map((res:any)=>
  {
    return res;
  }))
}
}
