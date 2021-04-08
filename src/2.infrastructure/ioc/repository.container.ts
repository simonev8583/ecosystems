import {asClass } from 'awilix';

import {SecurityRepository} from '../data';

export function containerRepository(container: any) { 
    container.register({
        UserRepository: asClass(SecurityRepository.UserRepository).singleton()
    })
}