import {exceptionTypes} from "../../../2.infrastructure/constants/exceptions";
import { Response } from "../Dtos/response";


export module ApplicationGeneric {
    export async function Try(action:any){
        {
            let response = new Response();
            try {
                response.entity = await action();
                response.success = true;
                response.type = exceptionTypes.Success;
            }
            catch(ex){
                response.message = ex.message;
                response.type = ex.type;
            };
            return response;
        }
    };
}