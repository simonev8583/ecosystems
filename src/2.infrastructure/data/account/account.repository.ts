import IAccount from "../../../1.domain/entities/account/iaccount";
import { IAccountRepository } from "../../../1.domain/interfaces/account/iaccount.repository";
import { DbFactory } from "../generic";
import { BaseRepository } from "../generic/base.repository";


export class AccountRepository extends BaseRepository implements IAccountRepository{
    private _account;
    private _db: DbFactory;

    constructor({Account, DbFactory}){
        super(Account, DbFactory)
        this._db = DbFactory;
        this._account = Account;
    }

    async existAccountNumber(accountNumber: number) {
        await this._db.getMongoConnection();
        return this._account.findOne({accountNumber: accountNumber});
    };

    async getByClient(userId: string) {
        await this._db.getMongoConnection();
        return this._account.find({owner: userId})
    }

    async isAccountUser(source: number, userId: string){
        await this._db.getMongoConnection();
        return this._account.findOne({accountNumber: source, owner: userId});
    };

    async getByAccountNumber(accountNumber: number){
        await this._db.getMongoConnection();
        return this._account.findOne({accountNumber:accountNumber});
    }
}