import { AverageTransactionDto, UserLoginDto } from "../../../1.domain/entities/dtos";
import ITransaction from "../../../1.domain/entities/transaction/itransaction";
import { BaseApplication } from "../../services/generic/base.application";
import { Response } from "../Dtos/response";

export interface ITransactionApplication extends BaseApplication {
    add: (transaction: ITransaction, user: UserLoginDto) => Promise<Response>;
    
    getByAccount: (accountId: string) => Promise<Response>;

    average: (entity: AverageTransactionDto) => Promise<Response>;
}