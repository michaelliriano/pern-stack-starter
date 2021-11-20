const express = require('express');

const router = express.Router();
const user = require('../../../services/user/user.create');

router.get('/create', user.create);

module.exports = router;
