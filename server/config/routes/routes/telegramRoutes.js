const express = require('express');
const router = express.Router();

const telegramController = require('../../../api/controllers/TelegramController');

router.post('/bot/initialize', telegramController.initialize)

module.exports = router;