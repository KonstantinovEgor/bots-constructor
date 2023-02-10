const express = require('express');
const router = express.Router();

const authRoutes = require('./routes/authRoutes');
const baseCRUDRoutes = require('./routes/baseCRUDRoutes');

router.use('/auth', authRoutes);
router.use('/crud', baseCRUDRoutes);

module.exports = router;