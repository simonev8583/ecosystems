import { IAuthApplication } from "../../../3.application/interfaces/auth";

let _authApplication:IAuthApplication = null;

export class AuthController {

    constructor({AuthApplication}){
        _authApplication = AuthApplication;
    }

    async signIn(req, res){
        const {body} = req;
        const credentials = await _authApplication.login(body);
        return res.send(credentials);
    }

    async signUp(req, res){
        const {body} = req;
        const user = await _authApplication.register(body);
        return res.send(user);
    }
}
