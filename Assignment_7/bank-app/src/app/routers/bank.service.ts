import {AccountType, Accounts} from '../mockdata/accounts';
import {FundTransferType,Funds} from '../mockdata/fundtransfer';
import { Offers } from '../mockdata/offers';

export class AccountService {
    constructor() {}

    findAllDetails(): Promise<AccountType> {
        console.log('findAllTodos')
        return new Promise((resolove, reject) => {
            setTimeout(resolove, 1000, Accounts);
        });
    }
}

export class FundsService {
    constructor(){}

    getPath(): Promise<FundTransferType> {
        return new Promise((resolve, rej) => {
            setTimeout(resolve, 1000, Funds);
        });
    }
}

export class OffersService {
    constructor(){}

    getPath(): Promise<FundTransferType> {
        return new Promise((resolve, rej) => {
            setTimeout(resolve, 1000, Offers);
        });
    }
}