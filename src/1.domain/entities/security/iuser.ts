import {Document} from 'mongoose';

interface IUser extends Document{
    name: string,
    surname: string,
    identification: number,
    password: string,
    salt: string
}

export default IUser;