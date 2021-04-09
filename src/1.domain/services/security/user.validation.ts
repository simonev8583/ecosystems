import {Validator} from 'fluentvalidation-ts'
import IUser from '../../entities/security/iuser';

type Person = {
    name: string;
    age: number;
  };

class UserValidator extends Validator<IUser>{
    constructor(){
        super();

        this.ruleFor('name').notEmpty().withMessage('El nombre es un campo obligatorio');
    }
}

export = UserValidator;