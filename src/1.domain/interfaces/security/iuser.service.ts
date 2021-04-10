import { UserLoginDto } from "../../entities/dtos";
import IUser from "../../entities/security/iuser";


export interface IUserService {
    login: (userLogin: IUser) => Promise<UserLoginDto>;
    register: (user: IUser) => Promise< IUser>;
}