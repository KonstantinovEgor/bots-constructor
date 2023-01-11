const express = require('express');
const cors = require('cors');

const Server = require('./services/Server');

const publicRoutes = require('../config/routes/publicRoutes');
const privateRoutes = require('../config/routes/privateRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', publicRoutes);
app.use('/private', privateRoutes);

const server = new Server(app);
server.start();

