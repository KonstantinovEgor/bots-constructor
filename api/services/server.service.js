const http = require('http');
const chalk = require('chalk');

const database = require('../../config/database');

const serverService = () => {

    const checkEnvironment = environment => {

        if (environment !== 'production' &&
                environment !== 'development' &&
                environment !== 'testing') {
                console.log(
                    chalk.red(
                        `\nNODE_ENV is set to ${environment}, but only production, development and testing are valid.\n`
                    )
                );
                process.exit(1);
            }

    };

    const startDatabaseConnection = () => {

        database
            .authenticate()
            .then(() => {
                console.log(chalk.green('Connection has been established successfully'));   
            })
            .catch(error => {
                console.log(chalk.red(`Unable to connect to the database: ${error.message}`));
            });

    }

    const startServer = (app, config) => {

        try {
            checkEnvironment(config.environment);

            const server = http.Server(app);

            server.listen(config.port, async () => {
                console.log(chalk.green(`\nServer started on http://${config.host}:${config.port}`))
            });

            startDatabaseConnection();
        } catch (error) {
            console.info(chalk.red(`\nFail to start server!\n${error}\n`));
        };

    };

    return {
        startServer
    };
};

module.exports = serverService;