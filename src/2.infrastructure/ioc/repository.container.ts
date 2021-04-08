import {asClass } from 'awilix';

import {SecurityRepository, GenericRepository} from '../data';

export function containerRepository(container: any) { 
    container.register({
        DbFactory: asClass(GenericRepository.DbFactory).singleton(),
        UserRepository: asClass(SecurityRepository.UserRepository).singleton()
    })
}