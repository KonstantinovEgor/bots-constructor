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
                    'Database connection:',
                    chalk.green('established successfully')
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
                    '\nServer:',
                    chalk.green(`started`)
                );
                console.log(
                    'Host:',
                    chalk.green(this.host)
                );
                console.log(
                    'Port:',
                    chalk.green(this.port)
                );

                this.connect();
            });
        } catch (error) {
            console.log(
                'Server:',
                chalk.red(`fail to start`),
                `\n${error}`
            );
        }
    }
}

module.exports = Server;