var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(11111111)
  res.render('index.html');
});

module.exports = router;
