import {Router} from 'express';
import {AuthMiddleware} from '../../middlewares';

export = ({AccountController}) =>{
    const router = Router();

    router.post("/add",[AuthMiddleware], AccountController.create);

    router.get("/getMyAccounts", [AuthMiddleware], AccountController.getMyAccounts);


    return router;
}