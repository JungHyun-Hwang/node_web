var express = require('express');
var router = express.Router();
var createError = require('http-errors')
/* GET home page. */
router.get('/test', function (req, res, next) {
    res.json({
        hello: 1
    });
});

router.get('/best', function (req, res, next) {
    res.json({
        best: 2
    });
});
router.get('/user', require('./user'));
router.all('*', function (req, res, next) {
    next(createError(404, 'API NOT FOUND'))
})
module.exports = router;