import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminUsers } from 'src/model/admin-users-list.model';
import { Users } from 'src/model/tabletypes';

@Injectable()
export class AdminService {

  private baseUrl = 'http://localhost:3004/users';

  constructor(private http: HttpClient) { }

  getUsers(
    loggedInUser: string,
    startDate: string,
    endDate: string,
  ): Observable<AdminUsers[]> {
    let userList: AdminUsers[] = [];
    let url = `${this.baseUrl}?_sort=createdDate&_order=desc&id_ne=${loggedInUser}`;
    if (startDate && endDate) {
      url = url + `&createdDate_gte=${startDate}&createdDate_lte=${endDate}`;
    }
    return this.http.get(url).pipe(
      map((result: Users[]) => {
        if (result.length > 0) {
          result.forEach((data) => {
            let userData: AdminUsers = new AdminUsers();
            userData.id = data.id;
            userData.email = data.email;
            userData.role = data.role;
            userData.createdDate = data.createdDate;
            userData.firstname = data.firstname;
            userData.lastname = data.lastname;
            userData.gender = data.gender;
            userData.phone = data.phone;
            userData.isActive = data.isActive;
            userList.push(userData);
          });
        }
        return userList;
      })
    );
  }

  getUser(userId: string){
    return this.http.get(`${this.baseUrl}?id=${userId}`);
  }

  updatedUserAccess(user: Users){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(
      `${this.baseUrl}/${user.id}`,
      user,
      {
        headers: headers,
      }
    );
  }
}
