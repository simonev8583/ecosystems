import { BaseService } from "../../../1.domain/services/generic/base.service";
import { ApplicationGeneric } from "../../interfaces/helpers/applicationGeneric";


export class BaseApplication {
    private _service: BaseService = null;

    constructor(Service){
        this._service = Service
    }

    async getAll(){
        return await ApplicationGeneric.Try(() => this._service.getAll());
    }

    async get(id){
        return await ApplicationGeneric.Try(() => this._service.get(id));
    }

    async create(model){
        return await ApplicationGeneric.Try(() => this._service.create(model));
    }

    async delete(id) {
        return await ApplicationGeneric.Try(() => this._service.delete(id));
    }
}