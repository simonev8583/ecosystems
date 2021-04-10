import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import 'express-async-errors';
import {ErrorMiddleware, NotFoundMiddleware} from '../middlewares';

export = function({AuthRoutes, AccountRoutes}){

    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes.use(cors()).use(helmet()).use(compression());
    apiRoutes.use(bodyParser.urlencoded({extended: false}));
    apiRoutes.use(bodyParser.json());

    apiRoutes.use("/auth", AuthRoutes);
    apiRoutes.use("/account", AccountRoutes);

    router.use("/api", apiRoutes);
    router.use(NotFoundMiddleware)
    router.use(ErrorMiddleware)

    return router;
}
