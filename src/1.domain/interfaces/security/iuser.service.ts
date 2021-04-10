import { UserLoginDto } from "../../entities/dtos";
import IUser from "../../entities/security/iuser";
import { BaseService } from "../../services/generic/base.service";


export interface IUserService extends BaseService{
    login: (userLogin: IUser) => Promise<UserLoginDto>;
    register: (user: IUser) => Promise< IUser>;
}