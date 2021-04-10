import { IAccountApplication } from "../../../3.application/interfaces/account/iaccount.application";

let _accountApplication: IAccountApplication = null;
export class AccountController {
    
    constructor({AccountApplication}){
        _accountApplication = AccountApplication
    }

    async create(req, res){
        const {body, user} = req;
        const response = await _accountApplication.add(body, user);
        return res.send(response);
    }

    async getMyAccounts(req, res){
        const {user} = req;
        const response = await _accountApplication.getByClient(user.sub);
        return res.send(response);
    }
}