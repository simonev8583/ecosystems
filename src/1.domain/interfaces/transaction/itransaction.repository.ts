import { BaseRepository } from "../../../2.infrastructure/data/generic/base.repository";
import IAccount from "../../entities/account/iaccount";
import ITransaction from "../../entities/transaction/itransaction";


export interface ITransactionRepository extends BaseRepository{
    getByAccount:(accountId: string) => Promise<ITransaction[]>;
}