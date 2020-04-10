import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountsComponent} from './routers/accounts.component';
import {FundTransferComponent} from './routers/fundtransfer.component';
import {OffersComponent} from './routers/offers.component';
import {PayRechargeComponent} from './routers/payrecharge.component';
import {AccountService,FundsService, OffersService} from './routers/bank.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    FundTransferComponent,
    OffersComponent,
    PayRechargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountService,FundsService, OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
