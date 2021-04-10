import { BaseRepository } from "../../../2.infrastructure/data/generic/base.repository";
import IUser from "../../entities/security/iuser";


export interface IUserRepository extends BaseRepository{
    validateCredentials: (userLogin: IUser) => Promise<IUser>;
    getByIdentification: (id:string) => Promise<IUser>;
}