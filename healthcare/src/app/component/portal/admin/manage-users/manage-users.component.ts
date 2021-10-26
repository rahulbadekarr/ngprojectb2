import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  role: string;
  gender: string;
  mobile_number: number;
  email: string;
  status:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},
  {name: 'Hydrogen',role: 'admin' ,gender:'female', mobile_number:11111,email:'abc@gmail.com',status:'active'},

];
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role', 'gender', 'mobile_number','email','status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
