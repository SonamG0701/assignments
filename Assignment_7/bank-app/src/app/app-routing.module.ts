import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent} from './routers/accounts.component';
import {FundTransferComponent} from './routers/fundtransfer.component';
import {OffersComponent} from './routers/offers.component';
import {PayRechargeComponent} from './routers/payrecharge.component';

const routes: Routes = [
  //root path
  {path: '', component: AccountsComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'fundtransfer', component: FundTransferComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'payrecharge', component: PayRechargeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
