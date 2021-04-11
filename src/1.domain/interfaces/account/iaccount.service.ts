import IAccount from "../../entities/account/iaccount";
import { UserLoginDto } from "../../entities/dtos";
import { BaseService } from "../../services/generic/base.service"

export interface IAccountService extends BaseService{
    add: (account: IAccount, user: UserLoginDto) => Promise<IAccount>;

    isAccountUser: (source: number, userId: string, value: number) => Promise<IAccount>;

    getByClient: (userId: string) => Promise<IAccount[]>;

    getByAccountNumber: (accountNumber: number) => Promise<IAccount>;

    updateBalance: (accountNumber: number, quantity: number, isAdd?: boolean) => Promise<IAccount>;
}