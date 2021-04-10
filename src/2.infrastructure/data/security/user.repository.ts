import IUser from "../../../1.domain/entities/security/iuser";
import { IUserRepository } from "../../../1.domain/interfaces/security/iuser.repository";
import { exceptionTypes, ManagerException } from "../../constants/exceptions";

let _user = null;
let _db = null;

export class UserRepository implements IUserRepository {
    constructor({User, DbFactory}){
        //super(User);
        _user = User;
        _db = DbFactory;
    }
    getById: (id: string) => Promise<IUser>;
    async getByIdentification(id: string){
        await _db.getMongoConnection();
        return await _user.findOne({identification: id})
    }

    async validateCredentials(userLogin: IUser){
        await _db.getMongoConnection();
        return await _user.findOne({identification: userLogin.identification});  
    }

    async register(user: IUser){
        try {
            return await _user.create(user);
        } catch (err) {            
            for (var field in err.errors) {
                throw new ManagerException(exceptionTypes.Database, err.errors[field].message)
            }
        }
    }
}