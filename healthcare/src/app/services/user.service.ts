import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demographics,  Immune,  Users } from 'src/model/tabletypes';
import { map } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private SECRET_KEY = 'SECRET';
  constructor(private http: HttpClient, private _router: Router) {}
  private baseUrl = 'http://localhost:3004/users';
  private userDemographicUrl = 'http://localhost:3004/demographics';
  private immuneUrl = 'http://localhost:3000/immunization';

  login(username: string, password: string) {
    return this.http.get(`${this.baseUrl}?username=${username}`).pipe(
      map((data: Users[]) => {
        let userData: Users;
        if (data.length > 0) {
          for (userData of data) {
            if (bcrypt.compareSync(password, userData.password)) {
              //const token = jwt.sign({username}, this.SECRET_KEY)
              localStorage.removeItem('user');
              localStorage.setItem('user', JSON.stringify(userData));
              return true;
            }
          }
        }
        return false;
      })
    );
  }

  registerUser(data: Users) : Observable<Users> {
    // const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(data.password, 10);
    let date = new Date();
    let userData: Users = new Users();
    userData.username = data.username;
    userData.password = pass;
    userData.role = data.role;
    userData.email = data.email;
    userData.createdDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    return this.http.post<Users>(this.baseUrl, userData);
  }

  validateUserName(username: string){
    return this.http.get(`${this.baseUrl}?username=${username}`).pipe(
      map((res : Array<Users>) => {
        if(res.length > 0){
          return false;
        }else{
          return true;
        }
      })
    );
  }

  createUserDemographics(demographicData: Demographics){
    return this.http.post(this.userDemographicUrl, demographicData);
  }

  getUserDetails(): Users |null {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }

  getUserProfiles(userId:string):Observable<Demographics>  |null {
    return this.http.get<Demographics>(`${this.userDemographicUrl}?patient_id=${userId}`);
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  saveImmunization(data):Observable<Immune>{
    console.log("ser",data)
    return this.http.post<Immune>(this.immuneUrl,data)
  }
}
