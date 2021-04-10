import {asClass } from 'awilix';

import { AuthController, AccountController } from '../../4.ui/controller';

export function containerController(container: any) { 
    container.register({
        AuthController: asClass(AuthController.AuthController.bind(AuthController.AuthController)).singleton(),
        AccountController: asClass(AccountController.AccountController.bind(AuthController.AuthController)).singleton(),
    });
}