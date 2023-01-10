const http = require('http');
const chalk = require();

const config = require('../../config/');

class Server {
    constructor (expressApp) {
        this.server = http.createServer(expressApp);
        this.port = config.port;
        this.host = config.host;
    }

    start() {
        try {
            this.server.listen(this.port, () => {
                console.log(
                    chalk.green(`\nServer success started`)
                );
            });
        } catch (error) {
            console.log(
                chalk.red(`\nFail to start Server:\n${error}`)
            );
        }
    }
}

module.exports = Server;