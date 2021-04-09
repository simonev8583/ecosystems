import { connect } from 'mongoose';
let _config = null;

export class DbFactory { 
    constructor({config}){
        _config = config;
    }

    async getMongoConnection(){
      return await connect(_config.DB_URI,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
    }

}