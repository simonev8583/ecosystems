import IUser from "../../entities/security/iuser";


export interface IUserRepository {
    validateCredentials: (userLogin: IUser) => Promise<IUser>;
    register: (user: IUser) => Promise<IUser>;
    getById: (id:string) => Promise<IUser>;
    getByIdentification: (id:string) => Promise<IUser>;
}