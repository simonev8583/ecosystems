import exceptionTypes from "../../../2.infrastructure/constants/exceptions/exceptionTypes";

export class Response {
    constructor(){
        this.success = false;
    }
    public entity: any;
    public success: boolean;
    public message: string;
    public type: exceptionTypes;
}