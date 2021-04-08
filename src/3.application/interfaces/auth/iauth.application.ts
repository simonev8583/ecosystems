import { User } from "../../../1.domain/entities/security";
import { Response } from "../Dtos/response";


export interface IAuthApplication {
    login: (userLogin: User) => Promise<Response>;
}