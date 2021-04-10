import { asClass, asValue } from 'awilix';

import { SecurityModel, Dtos, AccountModel } from '../../1.domain/entities';

export function containerEntity(container: any) { 
    container.register({
        User: asValue(SecurityModel.User),
        Account: asValue(AccountModel.Account),
        UserLoginDto : asClass(Dtos.UserLoginDto).transient()
    })
}