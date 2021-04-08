import { User } from "../../../1.domain/entities/security/user";
import { IUserRepository } from "../../../1.domain/interfaces/security/iuser.repository";

let _user = null;
let _db = null;

export class UserRepository implements IUserRepository {
    constructor({User, DbFactory}){
        //super(User);
        _user = User;
        _db = DbFactory;
    }

    async validateCredentials(userLogin: User){
        return await userLogin;
    }
}