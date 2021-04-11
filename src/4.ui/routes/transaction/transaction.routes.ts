import {Router} from 'express';
import {AuthMiddleware} from '../../middlewares';

export = ({TransactionController}) => {
    const router = Router();

    router.post("/add", [AuthMiddleware], TransactionController.create);

    router.get("/getByAccount/:account", [AuthMiddleware], TransactionController.getByAccount);

    router.get("/getById/:id", [AuthMiddleware], TransactionController.getById);

    return router
}