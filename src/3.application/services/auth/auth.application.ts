import {IAuthApplication} from '../../interfaces/auth'
import {ApplicationGeneric} from '../../interfaces/helpers/applicationGeneric';
import { User } from '../../../1.domain/entities/security/user';
import { IUserService } from '../../../1.domain/interfaces';

let _userService: IUserService = null;

export class AuthApplication implements IAuthApplication{
    constructor({UserService}){
        _userService = UserService;
    }

    async login(userLogin: User) {
        return await ApplicationGeneric.Try(() => _userService.login(userLogin))
    }
}