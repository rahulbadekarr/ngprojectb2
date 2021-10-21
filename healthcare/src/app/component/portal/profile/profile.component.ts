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
<<<<<<< HEAD
user:Users=new Users();
onFileChanged(event) {
  const file = event.target.files[0]
}
=======
  user:Users=new Users();
>>>>>>> 8d6e848ca41772423662d10513783b02216bb0f6

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
     this.user = this._userService.getUserDetails();
     this._userService.getUserProfiles(this.user.id).subscribe((data:any) => {
      for(let d of data){
        // this.user.email = d.email;
        this.profile.dob = d.dob;
        this.profile.gender = d.gender;
        this.profile.phone = d.phone;

      }


    });
  }
}
