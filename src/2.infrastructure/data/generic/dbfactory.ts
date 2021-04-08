import {Sequelize} from 'sequelize';
let _host = null;
let _port = null;
let _dbName = null;
let _user = null;
let _password = null;

export class DbFactory { 
    constructor({HostDb, PortDb, DbName, UserDb, PasswordDb}){
        _host = HostDb;
        _port = PortDb;
        _dbName = DbName;
        _user = UserDb;
        _password = PasswordDb;
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