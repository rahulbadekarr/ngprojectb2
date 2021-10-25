import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: Users = new Users();
  base64textString: any;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
  }

  selectFiles(evt) {
    let file = evt.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.user.profilepicture = this.base64textString
    this.uploadUserProfilePicture()
  }

  uploadUserProfilePicture(){
    this._userService.uploadUserPicture(this.user)
        .subscribe(res => {
          this.user = this._userService.getUserDetails();
        })
  }
}
