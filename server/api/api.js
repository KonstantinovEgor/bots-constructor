const express = require('express');
const cors = require('cors');

const Server = require('./services/Server');

const app = express();

app.use(cors());
app.use(express.json());

const server = new Server(app);
server.start();

