import IAccount from "../../../1.domain/entities/account/iaccount";
import { UserLoginDto } from "../../../1.domain/entities/dtos";
import { IAccountService } from "../../../1.domain/interfaces/account/iaccount.service";
import { IAccountApplication } from "../../interfaces/account/iaccount.application";
import { ApplicationGeneric } from "../../interfaces/helpers/applicationGeneric";
import { BaseApplication } from "../generic/base.application";


export class AccountApplication extends BaseApplication implements IAccountApplication{
    private _accountService: IAccountService;

    constructor ({AccountService}){
        super(AccountService);
        this._accountService = AccountService;
    }
    
    async add(account: IAccount, user: UserLoginDto){
        return await ApplicationGeneric.Try(() => this._accountService.add(account, user));
    };

    async getByClient(userId: string){
        return await ApplicationGeneric.Try(() => this._accountService.getByClient(userId));
    };
}