import {Document} from 'mongoose';
import { accountTypes } from '../../../2.infrastructure/constants/account';
import IUser from '../security/iuser';

interface IAccount extends Document{
    accountType: accountTypes,
    owner: IUser,
    accountNumber: number,
    balance: number
}

export default IAccount;