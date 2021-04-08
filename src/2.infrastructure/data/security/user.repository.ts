import { User } from "../../../1.domain/entities/security/user";
import { IUserRepository } from "../../../1.domain/interfaces/security/iuser.repository";

let _user = null;

export class UserRepository implements IUserRepository {
    constructor({User}){
        //super(User);
        _user = User;
    }

    async validateCredentials(userLogin: User){
        return await userLogin;
    }
}