import {asClass } from 'awilix';

import { AuthApplication } from '../../3.application/services';

export function containerApplication(container: any) { 
    container.register({
        AuthApplication: asClass(AuthApplication.AuthApplication).singleton()
    })
}