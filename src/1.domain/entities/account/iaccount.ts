import {Document} from 'mongoose';
import { accountTypes } from '../../../2.infrastructure/constants/account';

interface IAccount extends Document{
    accountType: accountTypes,
    owner: string,
    accountNumber: number,
    balance: number,
}

export default IAccount;