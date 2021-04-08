import {asClass } from 'awilix';

import { AuthController } from '../../4.ui/controller';

export function containerController(container: any) { 
    container.register({
        AuthController: asClass(AuthController.AuthController.bind(AuthController.AuthController)).singleton()
    })
}