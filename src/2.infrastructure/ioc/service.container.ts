import {asClass } from 'awilix';

import {SecurityService} from '../../1.domain/services';

export function containerService(container: any) { 
    container.register({
        UserService: asClass(SecurityService.UserService).singleton()
    })
}