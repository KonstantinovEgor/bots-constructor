const express = require('express');
const router = express.Router();

const authController = require('../../../api/controllers/AuthController');

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.post('/auth', authController.auth)

module.exports = router;