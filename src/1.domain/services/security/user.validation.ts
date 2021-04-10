import { use } from 'express/lib/application';
import {Validator, AsyncValidator} from 'fluentvalidation-ts'
import { Encrypt } from '../../../2.infrastructure/constants/helpers/encrypt.helper';
import IUser from '../../entities/security/iuser';
import { IUserRepository } from '../../interfaces';

let _userRepository: IUserRepository = null;


class UserValidator extends AsyncValidator<IUser>{
    constructor(UserRepository){
        super();
        _userRepository = UserRepository;
        this.ruleFor('name').notEmpty().notNull().withMessage('El nombre es un campo obligatorio');
        this.ruleFor('surname').notEmpty().notNull().withMessage("El apellido es un campo obligatorio");
        this.ruleFor('password').notEmpty().notNull().withMessage('La contraseña es una campo requerido')

        this.ruleFor('identification').mustAsync(async identification => await this.noExistIdentification(identification)).withMessage("Ya existe un usuario con esa identificación");
        this.ruleFor('password').mustAsync(async (password, user) => await this.validatePassword(user));
    }

    async noExistIdentification(id){
        let user = await _userRepository.getByIdentification(id);
        return user? false: true;
    }

    async validatePassword(user:IUser){
        let encrypt = new Encrypt()
        const {salt, hash} = encrypt.passwordEncrypt(user.password);
        user.password = hash;
        user.salt = salt;
        return true;
    }
}

export = UserValidator;