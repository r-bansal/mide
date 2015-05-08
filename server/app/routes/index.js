'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/challenge', require('./challenge'));
router.use('/user', require('./user'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});