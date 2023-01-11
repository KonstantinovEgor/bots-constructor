const http = require('http');
const chalk = require('chalk');

const database = require('../../config/database');
const config = require('../../config/');

class Server {
    constructor (expressApp) {
        this.server = http.createServer(expressApp);
        this.port = config.port;
        this.host = config.host;
    }

    connect() {
        database
        .authenticate()
        .then(() => {
            console.log(
                chalk.green('Database connection has been established successfully')
            );   
        })
        .catch(error => {
            console.log(
                chalk.red(`Fail connecting to database:\n${error}`)
            );
        });
    }

    start() {
        try {
            this.server.listen(this.port, () => {
                console.log(
                    chalk.green(`\nServer success started`)
                );

                this.connect();
            });
        } catch (error) {
            console.log(
                chalk.red(`Fail to start Server:\n${error}`)
            );
        }
    }
}

module.exports = Server;