import { User } from "../../entities/security/user";


export interface IUserRepository {
    validateCredentials: (userLogin: User) => Promise<User>;
}