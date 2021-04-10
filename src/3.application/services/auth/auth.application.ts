import {IAuthApplication} from '../../interfaces/auth'
import {ApplicationGeneric} from '../../interfaces/helpers/applicationGeneric';
import IUser from '../../../1.domain/entities/security/iuser';
import { IUserService } from '../../../1.domain/interfaces';
import { BaseApplication } from '../generic/base.application';

let _userService: IUserService = null;

export class AuthApplication extends BaseApplication implements IAuthApplication{
    constructor({UserService}){
        super(UserService)
        _userService = UserService;
    }
    async register (user: IUser) {
        return await ApplicationGeneric.Try(() => _userService.register(user));
    }

    async login(userLogin: IUser) {
        return await ApplicationGeneric.Try(() => _userService.login(userLogin));
    }
}