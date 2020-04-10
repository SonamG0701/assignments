import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-payrecharge',
    template: `
        <h1>Pay Bill and Recharge</h1>
        <p> With this new BillPay, you can now make online payments to over 260 billers across various categories including:</p>
        <ul>
            <li>Electricity Bills.</li>
            <li>Telephone and Mobile Bills</li>
            <li>Prepaid DTH/ Mobile Connection/ Data Card Recharge</li>
            <li>Gas Bills</li>
            <li>Mutual Funds</li>
            <li>Insurance Premiums</li>
            <li>Subscriptions</li>
            <li>Contribution to Charities.</li>
        </ul>
        <p>Add billers and pay your bills through the enhanced BillPay service, powered by BillDesk.
        </p>
               
    `
})
export class PayRechargeComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        console.log('PayRechargeComponent');
    }
}