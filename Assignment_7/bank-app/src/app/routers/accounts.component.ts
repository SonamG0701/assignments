import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AccountType} from '../mockdata/accounts';
import {AccountService} from './bank.service';


@Component({
    selector: 'app-accounts',
    styles:[
    `td, th {
        border: 1px solid #dddddd;
    }`]
    ,
    template: `
        <h1>Accounts</h1>        
        <table>
            <tr>                
                <th>Date</th>
                <th>Narration</th>
                <th>Cheque/Ref. No.</th>
                <th>Value Date</th>
                <th>Withdrawal</th>
                <th>Deposit</th>
                <th>Closing Balance</th>
            </tr>
            <tr *ngFor="let account of accounts">
                <td>{{account.date}}</td>
                <td>{{account.narration}}</td>
                <td>{{account.chequeNo}}</td>
                <td>{{account.valueDate}}</td>
                <td>{{account.withdrawl}}</td>
                <td>{{account.deposit}}</td>
                <td>{{account.closingBalanace}}</td>                
            </tr>            
        </table>
    `
})
// <pre>
//             {{urlsec | json}}
//         </pre>
export class AccountsComponent {
    urlsec: any;
    title: string;
    accounts:any; 
    constructor(private routerState: ActivatedRoute, private service:AccountService) { }
    public async ngOnInit() {
        console.log('AccountsComponent');
        this.accounts = await this.service.findAllDetails();
        console.log("this.accounts"+this.accounts);
        //url
        // this.routerState.url.subscribe(urlinfo => {
        //     urlinfo.forEach(urlseg => {
        //         console.log(urlseg.path);
        //         this.urlsec = urlseg
        //     });
        // });
        //data 
        // this.routerState.data.subscribe(info => {
        //     console.log(info);
        //     this.title = info.title
        // }

        // )
    }
}