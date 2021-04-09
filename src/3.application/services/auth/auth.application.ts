import {IAuthApplication} from '../../interfaces/auth'
import {ApplicationGeneric} from '../../interfaces/helpers/applicationGeneric';
import IUser from '../../../1.domain/entities/security/iuser';
import { IUserService } from '../../../1.domain/interfaces';

let _userService: IUserService = null;

export class AuthApplication implements IAuthApplication{
    constructor({UserService}){
        _userService = UserService;
    }

    async login(userLogin: IUser) {
        //return await ApplicationGeneric.Try(() => _userService.login(userLogin));
        return await ApplicationGeneric.Try(() => _userService.register(userLogin));
    }
}