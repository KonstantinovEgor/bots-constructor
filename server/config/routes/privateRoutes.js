const express = require('express');
const router = express.Router();

const telegramRoutes = require('./routes/telegramRoutes');
const userRoutes = require('./routes/userRoutes');

router.use('/telegram', telegramRoutes);
router.use('/user', userRoutes);

module.exports = router;