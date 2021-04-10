
import { DbFactory } from ".";
import { exceptionTypes, ManagerException } from "../../constants/exceptions";

let _db:DbFactory = null;

export class BaseRepository {
    private model = null;

    constructor(model, dbFactory){
        this.model = model;
        _db = dbFactory;
    }

    async getAll(){
        await _db.getMongoConnection();
        return await this.model.find();
    }

    async get(id){
        await _db.getMongoConnection();
        return await this.model.findById(id);
    }

    async create(model){
        await _db.getMongoConnection();
        try {
            return await this.model.create(model);
        } catch (err) {            
            for (var field in err.errors) {
                throw new ManagerException(exceptionTypes.Database, err.errors[field].message)
            }
        }
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return true;
    }
}