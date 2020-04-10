import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OffersService} from './bank.service'

@Component({
    selector: 'app-offers',
    template: `
        <h1>Offers</h1>
        <img src={{offers.path}}/>     
    `
})
export class OffersComponent {
    offers:any;

    constructor(private routerState: ActivatedRoute, private service: OffersService) { }
    public async ngOnInit() {
        this.offers = await this.service.getPath();
    }
}