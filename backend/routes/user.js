const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');

const router = express.Router()

// login 
router.post('/login', loginUser)

// logout
router.post('/signup', signupUser)

module.exports = router;