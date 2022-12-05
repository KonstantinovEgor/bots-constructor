const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const mapRoutes = require('express-routes-mapper');

const config = require('../config/');

const { startServer } = require('./services/server.service')();

const app = express();
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/private/*', (req, res, next) => next());
app.use('/private/*', (req, res, next) => next());
app.use('/public', mappedOpenRoutes);
app.use('/private', mappedAuthRoutes);

startServer(app, config);
