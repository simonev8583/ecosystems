import {Router} from 'express';

export = ({AuthController}) =>{
    const router = Router();
    router.post("/signin", AuthController.signIn);

    return router;
}