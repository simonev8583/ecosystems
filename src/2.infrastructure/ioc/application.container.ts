import {asClass } from 'awilix';

import { AuthApplication, AccountApplication, TransactionApplication } from '../../3.application/services';

export function containerApplication(container: any) { 
    container.register({
        AuthApplication: asClass(AuthApplication.AuthApplication).singleton(),
        AccountApplication: asClass(AccountApplication.AccountApplication).singleton(),
        TransactionApplication: asClass(TransactionApplication.TransactionApplication).singleton(),
    });
}