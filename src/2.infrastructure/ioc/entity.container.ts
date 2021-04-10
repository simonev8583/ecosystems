import { asClass, asValue } from 'awilix';

import { SecurityModel, Dtos } from '../../1.domain/entities';

export function containerEntity(container: any) { 
    container.register({
        User: asValue(SecurityModel.User),
        UserLoginDto : asClass(Dtos.UserLoginDto).transient()
    })
}