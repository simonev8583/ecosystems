import IUser from "../../../1.domain/entities/security/iuser";
import { BaseApplication } from "../../services/generic/base.application";
import { Response } from "../Dtos/response";


export interface IAuthApplication extends BaseApplication{
    login: (userLogin: IUser) => Promise<Response>;

    register: (user: IUser) => Promise<Response>;
}