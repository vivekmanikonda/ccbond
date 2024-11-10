const express = require('express');
const { RegisterUser, LoginUser } = require('../Authcontroller/Auth');
const router = express.Router();

router.post('/login', LoginUser);
router.post('/register', RegisterUser);

module.exports = router;
