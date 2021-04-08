import { User } from "../../entities/security/user";


export interface IUserService {
    login: (userLogin: User) => Promise<User>;
}