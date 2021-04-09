import { exceptionTypes, ManagerException } from "../../../2.infrastructure/constants/exceptions";
import IUser from "../../entities/security/iuser";
import { IUserRepository } from "../../interfaces";
import { IUserService } from "../../interfaces/security/iuser.service";
import UserValidator from "./user.validation";

let _userRepository: IUserRepository = null;

export class UserService implements IUserService{
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }
    async register(user: IUser){
        const validator = new UserValidator();
        const isInvalid = validator.validate(user)
        if(Object.keys(isInvalid).length > 0){
            throw new ManagerException(exceptionTypes.Validations,  isInvalid[Object.keys(isInvalid)[0]])            
        }
        return user;
        
    }

    async login(userLogin: IUser){
        return await _userRepository.validateCredentials(userLogin)
    }

}