import { exceptionTypes, ManagerException } from "../../../2.infrastructure/constants/exceptions";
import IAccount from "../../entities/account/iaccount";
import { UserLoginDto } from "../../entities/dtos";
import { IUserRepository } from "../../interfaces";
import { IAccountRepository } from "../../interfaces/account";
import { IAccountService } from "../../interfaces/account";
import { BaseService } from "../generic/base.service";
import AccountValidator from "./account.validation";


export class AccountService extends BaseService implements IAccountService{
    private _accountRepository: IAccountRepository;
    private _userRepository : IUserRepository;

    constructor({AccountRepository, UserRepository}){
        super(AccountRepository);
        this._accountRepository = AccountRepository;
        this._userRepository = UserRepository;
    }
    
    async add(account: IAccount, user: UserLoginDto){
        account.owner = user.sub;
        const validator = new AccountValidator(this._accountRepository, this._userRepository);
        const isInvalid = await validator.validateAsync(account)
        if(Object.keys(isInvalid).length > 0){
            throw new ManagerException(exceptionTypes.Configuration,  isInvalid[Object.keys(isInvalid)[0]])            
        }
        return await this._accountRepository.create(account);
    };

    async getByClient(userId: string){
        return this._accountRepository.getByClient(userId);
    }

    async isAccountUser(source: number, userId: string, value: number){
        let account =  await this._accountRepository.isAccountUser(source, userId);
        if (account){
            if(value <= account.balance && value > 0){
                return account;
            }
            throw new ManagerException(exceptionTypes.Configuration, "No cuenta con los suficientes fondos para realizar la transacción");
        }
        throw new ManagerException(exceptionTypes.Configuration, "La cuenta de destino no le pertenece");
    }

    async getByAccountNumber(accountNumber: number){
        let account = await this._accountRepository.getByAccountNumber(accountNumber);
        if (account){
            return account;
        }
        throw new ManagerException(exceptionTypes.Configuration, "La cuenta objetivo no existe");
    }

    async updateBalance(accountNumber: number, quantity: number, isAdd?: boolean) {
        let currentAccount = await this._accountRepository.get(accountNumber);
        if(isAdd){
            currentAccount.balance = currentAccount.balance + quantity;
        }
        else{
            currentAccount.balance = currentAccount.balance - quantity;
        }
        return await this._accountRepository.update(currentAccount.id, currentAccount);
    }
}