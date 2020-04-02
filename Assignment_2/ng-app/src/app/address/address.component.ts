import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() addresses:any;

  constructor() { }

  ngOnInit(): void {
    console.log('Address component: ' + this.addresses);
  }

}
