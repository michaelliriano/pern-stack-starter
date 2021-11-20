const express = require('express');

const router = express.Router();
const { home } = require('../../services/public/index');

router.get('/', home);

module.exports = router;
