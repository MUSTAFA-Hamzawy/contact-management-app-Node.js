const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

module.exports = {
    getProfile,
    login,
    logout,
    register
} = UserController;



router.get('/profile', getProfile);
router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);


module.exports = router;
