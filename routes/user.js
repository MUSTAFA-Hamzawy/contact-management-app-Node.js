const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const ValidateTokenMiddleware = require('../middlewares/ValidateTokenMiddleware');
const status = require('../config/statusCodes');

module.exports = {
    getProfile,
    login,
    logout,
    register
} = UserController;



router.get('/profile', ValidateTokenMiddleware, getProfile);
router.post('/login', login);
router.post('/register', register);
router.post('/logout', ValidateTokenMiddleware, logout);


module.exports = router;
