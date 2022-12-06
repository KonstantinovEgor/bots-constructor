const Sequelize = require('sequelize');

const connection = require('./config.json');
const config = require('./');

let database;
const environment = config.environment || 'development';
if (environment === 'production') {
        database = new Sequelize(
                connection.development.database,
                connection.development.user,
                connection.development.password, {
                        logging: false,
                        host: connection.development.host,
                        port: connection.development.port,
                        dialect: connection.development.dialect,
                        ssl: connection.development.ssl,
                        dialectOptions: connection.development.dialectOptions,
                        operatorsAliases: connection.development.operatorsAliases,
                        pool: {
                                max: 5,
                                min: 0,
                                idle: 10000,
                        },
                        define: {
                                timestamps: false
                        }
                }
        );
} else {
        database = new Sequelize(
                connection.development.database,
                connection.development.user,
                connection.development.password, {
                        logging: false,
                        host: connection.development.host,
                        port: connection.development.port,
                        dialect: connection.development.dialect,
                        ssl: connection.development.ssl,
                        dialectOptions: connection.development.dialectOptions,
                        operatorsAliases: connection.development.operatorsAliases,
                        pool: {
                                max: 5,
                                min: 0,
                                idle: 10000,
                        },
                        define: {
                                timestamps: false
                        }
                }
        );
}


module.exports = database;