const express = require('express');
const {authenticateToken} = require("../middleware/authToken");
const {getProfile} = require('../controllers/userController');

const router = express.Router();

router.get('/', authenticateToken, getProfile);

module.exports = router;