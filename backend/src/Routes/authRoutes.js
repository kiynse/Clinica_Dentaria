const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/authController');

// Rota para login
router.post('/login', AuthController.login);

module.exports = router;