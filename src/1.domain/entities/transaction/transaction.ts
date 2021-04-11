import { model, Model, Schema, Types } from "mongoose";
import autopopulate from 'mongoose-autopopulate';
import ITransaction from "./itransaction";

const TransactionSchema = new Schema({
    accountSource: {
        type: Types.ObjectId,
        ref: "accounts",
        required: true,
        autopopulate: true
    },
    accountTarget: {
        type: Types.ObjectId,
        ref: "accounts",
        required: true,
        autopopulate: true
    },
    quantity:{
        type: Number,
        required: true
    }
},
{timestamps: true});

TransactionSchema.plugin(autopopulate);
const Transaction: Model<ITransaction> = model('transactions', TransactionSchema);

export = Transaction;
