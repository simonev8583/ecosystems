import { Model, Schema, Types, model } from "mongoose";
import autopopulate from 'mongoose-autopopulate';
import IAccount from "./iaccount";


const AccountSchema = new Schema({
    accountType: {
        type: Number,
        required: true
    },
    accountNumber:{
        type: Number,
        required:true
    },
    balance: {
        type:Number,
        default: 0.0
    },
    owner: {
        type: Types.ObjectId,
        ref: "users",
        required: true,
        autopopulate : true
    }
})

AccountSchema.plugin(autopopulate);
const Account: Model<IAccount> = model('accounts', AccountSchema);

export = Account;