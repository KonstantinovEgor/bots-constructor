const http = require('http');
const chalk = require('chalk');

const database = require('../../config/database');
const config = require('../../config/');

class Server {
    constructor (expressApp) {
        this.server = http.createServer(expressApp);
        this.port = config.port;
        this.host = config.host;

        this.log = text => {
            const dateNow = new Date();
            console.log(`[` +
                `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
            + `]`, text);
        } 
    }

    connect() {
        database
            .authenticate()
            .then(() => {
                this.log(
                    'Database connection: ' +
                    chalk.green('established successfully\n')
                );   
            })
            .catch(error => {
                this.log(
                    chalk.red(`Fail connecting to database:\n${error}\n`)
                );
            });
    }

    start() {
        try {
            this.server.listen(this.port, () => {
                console.log();
                this.log(
                    'Authored by: ' +
                    chalk.green('ThendGroup | MiracleSw1n')
                );
                this.log(
                    'Server: ' +
                    chalk.green(`started`)
                );
                this.log(
                    'Host: ' +
                    chalk.green(this.host)
                );
                this.log(
                    'Port: ' +
                    chalk.green(this.port)
                );

                this.connect();
            });
        } catch (error) {
            this.log(
                'Server +',
                chalk.red(`fail to start`),
                `\n${error}`
            );
        }
    }
}

module.exports = Server;