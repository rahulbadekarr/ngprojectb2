import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/model/tabletypes';
import { map } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SECRET_KEY = "SECRET";
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3004/users';

  login(username: string, password: string){
    return this.http
      .get(`${this.baseUrl}?email=${username}`)
      .pipe(
        map((data : Users[]) => {
          let userData: Users;
          if (data.length > 0) {
            for(userData of data){
              if(bcrypt.compareSync(password, userData.password)){
                //const token = jwt.sign({username}, this.SECRET_KEY)
                return true;
              }
            }
          }
          return false;
        })
      )
  }

  // registerUser(useremail: string, password: string){
  //   const salt = bcrypt.genSaltSync(10);
  //   const pass = bcrypt.hashSync(password, 10);
  //   let userData : Users = new Users();
  //   userData.username = "abhay";
  //   userData.password = pass;
  //   userData.role = "Patient";
  //   userData.email = useremail;

  //   return this.http
  //   .post(this.baseUrl, userData).subscribe(data => console.log(data));
  // }
}
