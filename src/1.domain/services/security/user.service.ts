import { User } from "../../entities/security";
import { IUserRepository } from "../../interfaces";
import { IUserService } from "../../interfaces/security/iuser.service";

let _userRepository: IUserRepository = null;

export class UserService implements IUserService{
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }

    async login(userLogin: User){
        return await _userRepository.validateCredentials(userLogin)
    }

}