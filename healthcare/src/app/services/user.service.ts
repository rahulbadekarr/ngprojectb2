import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Demographics,  Immune,  Users } from 'src/model/tabletypes';
import { Immune,  Users } from 'src/model/tabletypes';
import { catchError, map, tap } from 'rxjs/operators';
// import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient, private _router: Router) {}
  private baseUrl = 'http://localhost:3004/users';
  private immuneUrl = 'http://localhost:3004/immunization';

  login(email: string, password: string) {
    return this.http.post('http://localhost:3004/login',{email,password}).pipe(
      map((data : any) => {
        if (data && data?.user?.isActive) {
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.removeItem('token');
          localStorage.setItem('token', JSON.stringify(data.accessToken));
          return true;
        }
        return false;
      }),
      catchError(errResponse =>{
        return throwError(errResponse.error)
      })
    );
  }

  registerUser(data: Users) : Observable<Users> {
    let date = new Date();
    data.createdDate = `${date.getMonth()+ 1}/${date.getDate()}/${date.getFullYear()}`;
    return this.http.post<Users>('http://localhost:3004/register', data).pipe(
      catchError(errResponse =>{
        return throwError(errResponse.error)
      })
    );
  }

  getUserDetails(): Users |null {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }

  getUserProfiles(userId:string):Observable<Users>  |null {
    return this.http.get<Users>(`${this.baseUrl}?patient_id=${userId}`);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

  getToken(){
    return JSON.parse(localStorage.getItem('token'));
  }

  saveImmunization(data):Observable<Immune>{
    let user = this.getUserDetails();
    data.patient_id=user.id;
    return this.http.post<Immune>(this.immuneUrl,data)
  }


  getImmunizationList():Observable<any>{
    return this.http.get(this.immuneUrl)
  }

  deleteImmun(id){
    return this.http.delete(`${this.immuneUrl}/${id}`)
  }

  uploadUserPicture(user : Users){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.baseUrl}/${user.id}`,
      user,
      {
        headers: headers,
      }
    ).pipe(
      tap((resData : Users) => {
        let userStorage = JSON.parse(localStorage.getItem("user"));
        userStorage.profilepicture = resData.profilepicture;
        localStorage.setItem('user', JSON.stringify(userStorage));
      })
    );
  }

  getPhysicianUsers(){
    return this.http.get(`${this.baseUrl}?role=Physician&isActive=true`);
  }
}
