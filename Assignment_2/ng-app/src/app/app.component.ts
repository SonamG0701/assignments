import { Component, Input } from '@angular/core';
import {UserComponent} from './user/user.component'
import * as data from '../mock/users.json';
import {UsersType} from './types/users.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: UsersType = (data as any).default;;

  constructor() {}

  ngOnInit() {
    console.log(this.userData);
  }
}
