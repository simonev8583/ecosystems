import crypto from 'crypto'
import { B64 } from './b64.helper';
let _b64 = null;

export class Encrypt {
    constructor(){
        _b64 = new B64();
    }

    passwordEncrypt(passB64){
        const passDecode = _b64.b64DecodeUnicode(passB64);
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto.pbkdf2Sync(passDecode, salt, 255, 256, "sha512").toString("hex");

        return {salt, hash};
    }

    validatePassword(passB64, salt, hashStored){
        const passDecode = _b64.b64DecodeUnicode(passB64);
        const hash = crypto.pbkdf2Sync(passDecode, salt, 255, 256, "sha512").toString("hex");
        return hashStored === hash
    }
}