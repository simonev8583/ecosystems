import IAccount from "../../../1.domain/entities/account/iaccount";
import { UserLoginDto } from "../../../1.domain/entities/dtos";
import { BaseApplication } from "../../services/generic/base.application";
import { Response } from "../Dtos/response";

export interface IAccountApplication extends BaseApplicationĀ {
    add: (account: IAccount, user: UserLoginDto) => Promise<Response>;

    getByClient: (userId: string) => Promise<Response>;
}