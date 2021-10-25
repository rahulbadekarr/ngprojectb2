import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,  OnDestroy} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements  OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  user : Users;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 500px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.user = this._userService.getUserDetails();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onlogout(){
    this._userService.logout();
  }
}

