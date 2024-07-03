const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.registerForm);
router.post('/register', usersController.registerUser);
router.get('/login', usersController.loginForm);
router.post('/login', usersController.loginUser);
router.get('/logout', usersController.logoutUser);

module.exports = router;
