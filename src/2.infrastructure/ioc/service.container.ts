import {asClass } from 'awilix';

import {SecurityService, AccountService} from '../../1.domain/services';

export function containerService(container: any) { 
    container.register({
        UserService: asClass(SecurityService.UserService).singleton(),
        AccountService: asClass(AccountService.AccountService).singleton(),
    });
}