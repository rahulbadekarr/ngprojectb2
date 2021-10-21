import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Demographics, Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Demographics = new Demographics();
  user:Users=new Users();

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
     this.user = this._userService.getUserDetails();
     this._userService.getUserProfiles(this.user.id).subscribe((data:any) => {
      for(let d of data){
        this.profile.dob = d.dob;
        this.profile.gender = d.gender;
        this.profile.phone = d.phone;

      }


    });
  }
}
