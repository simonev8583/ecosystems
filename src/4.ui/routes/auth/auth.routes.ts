import {Router} from 'express';

export = ({AuthController}) =>{
    const router = Router();
    router.post("/signin", AuthController.signIn);

    router.post("/signup", AuthController.signUp);

    return router;
}