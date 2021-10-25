import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { Demographics, Users } from 'src/model/tabletypes';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Users = new Users();
  user:Users=new Users();
urllink:string = "assets/images/1.jpg";
selectFiles(event){
  if(event.target.files){
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event : any)=>{
      this.urllink = event.target.result
    }

  }

}

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
