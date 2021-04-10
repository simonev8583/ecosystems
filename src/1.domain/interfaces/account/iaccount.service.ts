import IAccount from "../../entities/account/iaccount";
import { UserLoginDto } from "../../entities/dtos";
import { BaseService } from "../../services/generic/base.service"

export interface IAccountService extends BaseService{
    add: (account: IAccount, user: UserLoginDto) => Promise<IAccount>;

    getByClient: (userId: string) => Promise<IAccount[]>;
}