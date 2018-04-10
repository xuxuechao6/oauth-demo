var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
    console.log(222222222)
    res.render('index.html');
});

router.get('/', function(req, res, next) {
    console.log(111111111111111111)
    res.render('index.html');
});

module.exports = router;
