import { ITransactionApplication } from "../../../3.application/interfaces/transaction";


let _transactionApplication: ITransactionApplication;

export class TransactionController{
    constructor({TransactionApplication}){
        _transactionApplication = TransactionApplication;
    }

    async create(req, res){
        let {body, user} = req;
        let response = await _transactionApplication.add(body, user);
        return res.send(response);
    }

    async getByAccount(req,res){
        let {account} = req.params;
        let response = await _transactionApplication.getByAccount(account);
        return res.send(response);
    }

    async getById(req, res){
        let {id} = req.params;
        let response = await _transactionApplication.get(id);
        return res.send(response);
    }

    async average(req, res){
        const {body} = req;
        const response = await _transactionApplication.average(body)
        return res.send(response)
    }
}