import ITransaction from "../../../1.domain/entities/transaction/itransaction";
import { ITransactionRepository } from "../../../1.domain/interfaces/transaction";
import { DbFactory } from "../generic";
import { BaseRepository } from "../generic/base.repository";


export class TransactionRepository extends BaseRepository implements ITransactionRepository{
    private _transaction;
    private _db: DbFactory;

    constructor({Transaction, DbFactory}){
        super(Transaction, DbFactory);
        this._db = DbFactory;
        this._transaction = Transaction;
    }
    async getByAccount(accountId: string) {
        await this._db.getMongoConnection();
        return this._transaction.find({accountSource: accountId});
    };
}