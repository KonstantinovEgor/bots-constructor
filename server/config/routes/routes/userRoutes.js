const express = require('express');
const router = express.Router();

const userController = require('../../../api/controllers/UserController');

router.get('/get-telegram-bots', userController.getTelegramBots);

module.exports = router;