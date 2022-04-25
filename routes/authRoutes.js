const express = require('express');
const router = express.Router();

// Cont
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/forgotpassword').post(forgotPassword);

router.route('/passwordreset/:resetToken').put(resetPassword);

module.exports = router;
