import { AverageTransactionDto } from "../../../1.domain/entities/dtos";
import { ITransactionRepository } from "../../../1.domain/interfaces/transaction";
import { DbFactory } from "../generic";
import { BaseRepository } from "../generic/base.repository";
import ISODate from 'isodate';



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

    async calculateAverage(entity: AverageTransactionDto){
        
        await this._db.getMongoConnection();
        let filter = await this._transaction.aggregate([
            {
                $match:{
                    createdAt: {
                        $gte:  ISODate(entity.initialDate),
                        $lt:  ISODate(entity.finalDate)
                    },
                },
            },
            {
                $group:
                {
                    _id: entity.accountNumber,
                    avgQuantity: { $avg: "$quantity" }
                }
            }
            //Lookup con Accounts para validar el numero de cuenta 
        ]);
        return 0;
    };
}

