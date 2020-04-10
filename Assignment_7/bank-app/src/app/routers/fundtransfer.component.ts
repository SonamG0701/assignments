import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FundsService} from './bank.service'

@Component({
    selector: 'app-fundtransfer',
    template: `
        <h1>Fund Transfer</h1>        
        <img src={{funds.path}}/>
    `
})
export class FundTransferComponent {
    funds:any;
    constructor(private routerState: ActivatedRoute, private service: FundsService) { }
    public async ngOnInit() {
        this.funds = await this.service.getPath();
    }
}