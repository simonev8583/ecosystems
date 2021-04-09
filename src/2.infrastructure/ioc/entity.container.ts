import { asValue } from 'awilix';

import { SecurityModel } from '../../1.domain/entities';

export function containerEntity(container: any) { 
    container.register({
        User: asValue(SecurityModel.User)
    })
}