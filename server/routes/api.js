const express = require('express');
const router = express.Router();

router.use('/owners', require('./owners'));
router.use('/walkers', require('./walkers'));

module.exports = router;
