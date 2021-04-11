import { UserLoginDto } from "../../entities/dtos";
import ITransaction from "../../entities/transaction/itransaction";
import { ITransactionRepository, ITransactionService } from "../../interfaces/transaction";
import { BaseService } from "../generic/base.service";


export class TransactionService extends BaseService implements ITransactionService{
    private _transactionRepository: ITransactionRepository;

    constructor({TransactionRepository}){
        super(TransactionRepository);
        this._transactionRepository = TransactionRepository;
    }
    
    async add (transaction: ITransaction){
        return this._transactionRepository.create(transaction);
    }

    async getByAccount(accountId: string){
        return this._transactionRepository.getByAccount(accountId);
    };
}