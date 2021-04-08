
let _authApplication = null;

export class AuthController {

    constructor({AuthApplication}){
        _authApplication = AuthApplication;
    }

    async signIn(req, res){
        const {body} = req;
        const credentials = await _authApplication.login(body);
        return res.send(credentials);
    }
}
