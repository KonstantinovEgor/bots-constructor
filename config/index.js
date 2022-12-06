const publicRoutes = require('./routes/publicRoutes');
const privateRoutes = require('./routes/privateRoutes');

require('dotenv')
    .config();

const config = {
        port: process.env.PORT || 5000,
        host: process.env.HOST || 'localhost',
        environment: process.env.NODE_ENV || 'development',
        publicRoutes,
        privateRoutes,
        migration: false
}

module.exports = config;