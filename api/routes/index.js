var express = require('express');
var router = express.Router();
var package = require('../package');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    version: package.version,
    author: package.author
  });
});

router.get('/api', function(req, res, next){
  res.status(200).json({
    version: package.version,
    author: package.author
  });
});

module.exports = router;
