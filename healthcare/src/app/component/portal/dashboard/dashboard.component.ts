import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : Users;
  constructor(private _userService: UserService){}
  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
  }


  
}
