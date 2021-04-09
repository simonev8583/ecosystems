import IUser from "../../entities/security/iuser";


export interface IUserService {
    login: (userLogin: IUser) => Promise<IUser>;
    register: (user: IUser) => Promise< IUser>;
}