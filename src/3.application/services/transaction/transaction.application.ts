import { BaseApplication } from "../generic/base.application";
import {ITransactionService} from '../../../1.domain/interfaces/transaction/itransaction.service';
import { UserLoginDto } from "../../../1.domain/entities/dtos";
import { ApplicationGeneric } from "../../interfaces/helpers/applicationGeneric";
import ITransaction from "../../../1.domain/entities/transaction/itransaction";
import { ITransactionApplication } from "../../interfaces/transaction";
import { IAccountService } from "../../../1.domain/interfaces/account";

export class TransactionApplication extends BaseApplication implements ITransactionApplication {
    private _transactionService: ITransactionService;
    private _accountService: IAccountService;

    constructor({TransactionService, AccountService}){
        super(TransactionService);
        this._transactionService = TransactionService;
        this._accountService = AccountService;
    }
    
    async add(transaction: ITransaction, user: UserLoginDto){
        return await ApplicationGeneric.Try(async() => {
            let source = await this._accountService.isAccountUser(transaction.accountSource, user.sub, transaction.quantity);
            let target = await this._accountService.getByAccountNumber(transaction.accountTarget);
            transaction.accountSource = source.id;
            transaction.accountTarget = target.id;
            await this._transactionService.add(transaction)
            await this._accountService.updateBalance(transaction.accountSource, transaction.quantity) // Subtract
            await this._accountService.updateBalance(transaction.accountTarget, transaction.quantity, true) // Add
        } );
    };

    async getByAccount(accountId: string) {
        return await ApplicationGeneric.Try(()=> this._transactionService.getByAccount(accountId));
    };
} 