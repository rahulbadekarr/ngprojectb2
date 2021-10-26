import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Demographics,  Immune,  Users } from 'src/model/tabletypes';
import { Immune,  Users } from 'src/model/tabletypes';
import { catchError, map, tap } from 'rxjs/operators';
// import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient, private _router: Router) {}
  private baseUrl = 'http://localhost:3004/users';
  // private userDemographicUrl = 'http://localhost:3004/demographics';
  private immuneUrl = 'http://localhost:3004/immunization';

  login(email: string, password: string) {
    return this.http.post('http://localhost:3004/login',{email,password}).pipe(
      map((data : any) => {
        //let userData: Users;
        if (data) {
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.removeItem('token');
          localStorage.setItem('token', JSON.stringify(data.accessToken));
          return true;
          // for (userData of data) {
          //   if (bcrypt.compareSync(password, userData.password)) {
          //     const token = jwt.sign({username}, this.SECRET_KEY)
          //     localStorage.removeItem('user');
          //     localStorage.setItem('user', JSON.stringify(userData));
          //     return true;
          //   }
          //}
        }
        return false;
      }),
      catchError(errResponse =>{
        return throwError(errResponse.error)
      })
    );
  }

  registerUser(data: Users) : Observable<Users> {
    // const salt = bcrypt.genSaltSync(10);
    //const pass = bcrypt.hashSync(data.password, 10);
    let date = new Date();
    // let userData: Users = new Users();
    // userData.username = data.username;
    // userData.password = data.password;
    // userData.role = data.role;
    // userData.email = data.email;
    data.createdDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    return this.http.post<Users>('http://localhost:3004/register', data).pipe(
      catchError(errResponse =>{
        return throwError(errResponse.error)
      })
    );
  }

  // validateUserName(username: string){
  //   return this.http.get(`${this.baseUrl}?username=${username}`).pipe(
  //     map((res : Array<Users>) => {
  //       if(res.length > 0){
  //         return false;
  //       }else{
  //         return true;
  //       }
  //     })
  //   );
  // }

  // createUserDemographics(demographicData: Demographics){
  //   return this.http.post(this.userDemographicUrl, demographicData);
  // }

  getUserDetails(): Users |null {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }

  // getUserProfiles(userId:string):Observable<Demographics>  |null {
  //   return this.http.get<Demographics>(`${this.userDemographicUrl}?patient_id=${userId}`);
  // }

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

    console.log("ser",data)
    return this.http.post<Immune>(this.immuneUrl,data)
  }

  // private _ref$=new Subject<void>()

  // get ref$(){
  //   return this._ref$;
  // }

  getImmunizationList():Observable<any>{
    console.log("inside get list")
    return this.http.get(this.immuneUrl)
    // .pipe(
    //   tap(()=>{
    //     this._ref$.next()
    //   })
    // )
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

  // uploadUserPicture(user : Users){
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   return this.http.patch(
  //     `${this.baseUrl}/${user.id}`,
  //     user,
  //     {
  //       headers: headers,
  //     }
  //   ).pipe(
  //     tap((resData : Users) => {
  //       let userStorage = JSON.parse(localStorage.getItem("user"));
  //       userStorage.profilepicture = resData.profilepicture;
  //       localStorage.setItem('user', JSON.stringify(userStorage));
  //     })
  //   );
  // }
}
