import { exceptionTypes, ManagerException } from "../../2.infrastructure/constants/exceptions";
import jwt from 'jsonwebtoken';
import config from '../../config';

export = (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token){
        throw new ManagerException(exceptionTypes.Authentication, "Debe enviar un token");
    }
    jwt.verify(token, config.JWT_SECRET, (err, tokenDecoded) => {
        if(err){
            throw new ManagerException(exceptionTypes.Authentication, "Token invalido o vencido");
        }
        req.user = tokenDecoded.user;
        next();
    });
}