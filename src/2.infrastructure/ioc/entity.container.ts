import { asClass, asValue } from 'awilix';

import { SecurityModel, Dtos, AccountModel, TransactionModel } from '../../1.domain/entities';

export function containerEntity(container: any) { 
    container.register({
        User: asValue(SecurityModel.User),
        Account: asValue(AccountModel.Account),
        Transaction: asValue(TransactionModel.Transaction),


        UserLoginDto : asClass(Dtos.UserLoginDto).transient(),
        AverageTransactionDto: asClass(Dtos.AverageTransactionDto).transient(),
    })
}