import {AsyncValidator} from 'fluentvalidation-ts'
import { accountTypes } from '../../../2.infrastructure/constants/account';
import { Encrypt } from '../../../2.infrastructure/constants/helpers/encrypt.helper';
import IAccount from '../../entities/account/iaccount';
import IUser from '../../entities/security/iuser';
import { IUserRepository } from '../../interfaces';
import { IAccountRepository } from '../../interfaces/account';

let _accountRepository: IAccountRepository = null;
let _userRepository: IUserRepository = null;

class AccountValidator extends AsyncValidator<IAccount>{
    constructor(AccountRepository, UserRepository){
        super();
        _accountRepository = AccountRepository;
        _userRepository = UserRepository
        this.ruleFor('accountType').mustAsync(async type => await this.existAccountType(type)).withMessage("No existe el tipo de cuenta que desea crear");
        this.ruleFor('accountNumber').mustAsync(async (number, account) => await this.validateAccountNumber(account)).withMessage("Debe iniciar sesión para poder identificar al usuario");
    }

    async existAccountType(type){
        for (var member in accountTypes) {
            if(type.toString() === member){
                return true
            }
         }
         return false;
    }

    async validateAccountNumber(account: IAccount){       
        if(account.owner.length > 0){
            return await this.buildAccountNumber(account);
        }
        return false;
    }

    async buildAccountNumber(account: IAccount)
        {
            let user:IUser = await _userRepository.get(account.owner);
            account.accountNumber = parseInt(user.identification + '' + account.accountType);
            let counter = 0;
            let existAccountNumber = await _accountRepository.existAccountNumber(account.accountNumber);
            while (existAccountNumber)
            {
                counter++;
                account.accountNumber = parseInt(user.identification + '' + account.accountType+ '' + counter);
                existAccountNumber = await _accountRepository.existAccountNumber(account.accountNumber);
            }
            return true;
        }

}

export = AccountValidator;