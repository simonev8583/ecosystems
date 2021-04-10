import IUser from "../../../1.domain/entities/security/iuser";
import { IUserRepository } from "../../../1.domain/interfaces/security/iuser.repository";
import { DbFactory } from "../generic";
import { BaseRepository } from "../generic/base.repository";

export class UserRepository extends BaseRepository implements IUserRepository{
    private _user;
    private _db: DbFactory;
    constructor({User, DbFactory}){
        super(User, DbFactory);
        this._user = User;
        this._db = DbFactory;
    }
    
    async getByIdentification(id: string){
        await this._db.getMongoConnection();
        return  await this._user.findOne({identification: id})
    }

    async validateCredentials(userLogin: IUser){
        await this._db.getMongoConnection();
        return  await this._user.findOne({identification: userLogin.identification});  
    }
}