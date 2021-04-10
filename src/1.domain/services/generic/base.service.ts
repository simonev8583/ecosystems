import { BaseRepository } from "../../../2.infrastructure/data/generic/base.repository";


export class BaseService{
    private _repository: BaseRepository = null;
    constructor(Repository){
        this._repository = Repository;
    }

    async getAll(){
        return await this._repository.getAll()
    }

    async get(id){
        return await this._repository.get(id)
    }

    async create(model){
        return await this._repository.create(model);
    }

    async delete(id) {
        return await this._repository.delete(id);
    }
}