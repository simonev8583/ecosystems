import ITransaction from "../../entities/transaction/itransaction";
import { BaseService } from "../../services/generic/base.service";


export interface ITransactionService extends BaseService {
    add: (transaction: ITransaction) => Promise<ITransaction>;

    getByAccount:(accountId: string) => Promise<ITransaction[]>;
}