const express = require('express');
const router = express.Router();

const telegramController = require('../../../api/controllers/TelegramController');

router.get('/bot', telegramController.get);
router.post('/bot/add', telegramController.add);

router.post('/bot/initialize', telegramController.initialize);

module.exports = router;