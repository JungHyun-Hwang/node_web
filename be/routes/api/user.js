var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function (req, res, next) {
    res.json({
        a: 1
    });
});

router.all('*', function (req, res, next) {
    next(createError(404))
})
module.exports = router;