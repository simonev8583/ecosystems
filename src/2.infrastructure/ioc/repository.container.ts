import {asClass } from 'awilix';

import {SecurityRepository, GenericRepository, AccountRepository, TransactionRepository} from '../data';

export function containerRepository(container: any) { 
    container.register({
        DbFactory: asClass(GenericRepository.DbFactory).singleton(),
        UserRepository: asClass(SecurityRepository.UserRepository).singleton(),
        AccountRepository: asClass(AccountRepository.AccountRepository).singleton(),
        TransactionRepository: asClass(TransactionRepository.TransactionRepository).singleton(),
    })
}