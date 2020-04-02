import { Component, OnInit, Input } from '@angular/core';
import { UsersType } from '../types/users.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() users:UsersType[] ;
  addressData:any;
  companyData:any;

  constructor() { } 

  ngOnInit(): void {    
    console.log("user component" + this.users);
    this.addressData = this.users.map(user => user.address);
    this.companyData = this.users.map(user => user.company);
    console.log("address data: " + this.addressData);
    console.log("company data: " + this.companyData);
  }

}
