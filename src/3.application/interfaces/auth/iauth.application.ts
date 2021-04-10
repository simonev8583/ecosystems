import IUser from "../../../1.domain/entities/security/iuser";
import { Response } from "../Dtos/response";


export interface IAuthApplication {
    login: (userLogin: IUser) => Promise<Response>;

    register: (user: IUser) => Promise<Response>;
}