var express = require('express');
var router = express.Router();
const sha256 = require('js-sha256');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GuessNonce' , result : 'nothing yet'});
});


module.exports = router;
