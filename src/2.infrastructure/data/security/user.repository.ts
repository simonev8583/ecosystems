import IUser from "../../../1.domain/entities/security/iuser";
import { IUserRepository } from "../../../1.domain/interfaces/security/iuser.repository";
import { DbFactory } from "../generic";
import { BaseRepository } from "../generic/base.repository";

let _user = null;
let _db: DbFactory = null;

export class UserRepository extends BaseRepository implements IUserRepository{
    constructor({User, DbFactory}){
        super(User, DbFactory);
        _user = User;
        _db = DbFactory;
    }
    getById: (id: string) => Promise<IUser>;
    async getByIdentification(id: string){
        await _db.getMongoConnection();
        return  await _user.findOne({identification: id})
    }

    async validateCredentials(userLogin: IUser){
        await _db.getMongoConnection();
        return  await _user.findOne({identification: userLogin.identification});  
    }
}