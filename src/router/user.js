const express = require('express');
const {
    validLogin,
} = require('../controller/user');

const router = express.Router();

router.post('/login', validLogin);

module.exports = router;
