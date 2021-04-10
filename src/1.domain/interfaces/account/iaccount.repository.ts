import { BaseRepository } from "../../../2.infrastructure/data/generic/base.repository";
import IAccount from "../../entities/account/iaccount";


export interface IAccountRepository extends BaseRepository{
    existAccountNumber: (accountNumber: number) => Promise<IAccount>;

    getByClient: (userId: string) => Promise<IAccount[]>;
}