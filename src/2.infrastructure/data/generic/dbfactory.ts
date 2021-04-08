import {Sequelize} from 'sequelize';
let _host = null;
let _port = null;
let _dbName = null;
let _user = null;
let _password = null;

export class DbFactory { 
    constructor({config}){
        _host = config.DB_SQL_HOST;
        _port = config.DB_SQL_PORT;
        _dbName = config.DB_SQL_DB;
        _user = config.DB_SQL_USER;
        _password = config.DB_SQL_PASS;
    }

    async getMssqlConnection (){
        return new Sequelize(_dbName, _user, _password, {
            host: _host,
            port: _port,
            dialect: "mssql",
            pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idle: 10000,
            },
          });
    }

}