import {asFunction} from 'awilix';

import {AuthRoutes, AccountRoutes, TransactionRoutes} from '../../4.ui/routes/index.routes';

export function containerRoutes(container){
    container.register({
        AuthRoutes: asFunction(AuthRoutes.AuthRoutes).singleton(),
        AccountRoutes: asFunction(AccountRoutes.AccountRoutes).singleton(),
        TransactionRoutes: asFunction(TransactionRoutes.TransactionRoutes).singleton(),
    });
}