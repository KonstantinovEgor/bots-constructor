const express = require('express');
const router = express.Router();

const telegramRoutes = require('./routes/telegramRoutes');

router.use('/telegram', telegramRoutes);

module.exports = router;