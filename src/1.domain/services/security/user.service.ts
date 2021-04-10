import { exceptionTypes, ManagerException } from "../../../2.infrastructure/constants/exceptions";
import { Encrypt } from "../../../2.infrastructure/constants/helpers/encrypt.helper";
import { generateToken } from "../../../2.infrastructure/constants/helpers/jwt.helper";
import { UserLoginDto } from "../../entities/dtos";
import IUser from "../../entities/security/iuser";
import { IUserRepository } from "../../interfaces";
import { IUserService } from "../../interfaces/security/iuser.service";
import { BaseService } from "../generic/base.service";
import UserValidator from "./user.validation";

let _userLoginDto: UserLoginDto = null;

export class UserService extends BaseService implements IUserService{
    private _userRepository: IUserRepository;
    
    constructor({UserRepository, UserLoginDto}){
        super(UserRepository);
        this._userRepository = UserRepository;
        _userLoginDto = UserLoginDto;
    }
    async register(user: IUser){
        const validator = new UserValidator(this._userRepository);
        const isInvalid = await validator.validateAsync(user)
        if(Object.keys(isInvalid).length > 0){
            throw new ManagerException(exceptionTypes.Validations,  isInvalid[Object.keys(isInvalid)[0]])            
        }
        let newUser:IUser = await this._userRepository.create(user);
        newUser.salt = undefined
        newUser.password = undefined;
        return newUser;
    }

    async login(userLogin: IUser){
        let userStored: IUser = await this._userRepository.validateCredentials(userLogin);
        if(userStored){
            let encrypt = new Encrypt();
            if(encrypt.validatePassword(userLogin.password, userStored.salt, userStored.password)){
                _userLoginDto.sub = userStored.id;
                _userLoginDto.name = userStored.name;
                _userLoginDto.surname = userStored.surname;
                _userLoginDto.identification = userStored.identification;
                _userLoginDto.token = generateToken(_userLoginDto);
                return _userLoginDto;
            }
            throw new ManagerException(exceptionTypes.Authentication, "Contraseña invalida");
        }
        throw new ManagerException(exceptionTypes.Authentication, "Identificación no es correcta");

    }

}