import { Model, model, Schema} from 'mongoose'
import IUser from './iuser';


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

const User: Model<IUser> = model('users', UserSchema);

export = User;