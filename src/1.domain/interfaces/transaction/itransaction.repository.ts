import { BaseRepository } from "../../../2.infrastructure/data/generic/base.repository";
import IAccount from "../../entities/account/iaccount";
import { AverageTransactionDto } from "../../entities/dtos";
import ITransaction from "../../entities/transaction/itransaction";


export interface ITransactionRepository extends BaseRepository{
    getByAccount:(accountId: string) => Promise<ITransaction[]>;

    calculateAverage:(entity: AverageTransactionDto) => Promise<number>;
}