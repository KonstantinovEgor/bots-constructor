const express = require('express');
const router = express.Router();

const AuthController = require('../../../api/controllers/AuthController');

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)

module.exports = router;