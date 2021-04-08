import exceptionTypes from "./exceptionTypes";

export class ManagerException {

    public type: exceptionTypes;
    public message: string;

    public constructor(type:any = null, message:string = null) {
        this.type = type? type: exceptionTypes.Generic;
        this.message = message ? message : "Error general";
    }
}
