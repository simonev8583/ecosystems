import { Document } from "mongoose";

interface ITransaction extends Document{
    accountSource: number,
    accountTarget: number,
    quantity: number
}

export default ITransaction;