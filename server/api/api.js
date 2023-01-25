const express = require('express');
const cors = require('cors');

const Server = require('./services/Server');

const publicRoutes = require('../config/routes/publicRoutes');
const privateRoutes = require('../config/routes/privateRoutes');

const errorHandler = require('./middlewares/errorHandlingMiddlewares');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/public', publicRoutes);
app.use('/api/private', privateRoutes);
app.use(errorHandler);

const server = new Server(app);
server.start();

