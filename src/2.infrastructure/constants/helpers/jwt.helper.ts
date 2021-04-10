import {sign} from 'jsonwebtoken';
import config  from '../../../config';

export function generateToken(user){
    return sign({user}, config.JWT_SECRET, {expiresIn: '8h'});
}