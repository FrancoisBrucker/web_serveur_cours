var express = require('express');
var router = express.Router();

module.exports = router

router.use('/current', require('./v1'))
router.use('/v1', require('./v1'))

