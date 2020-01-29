var express = require('express');
var router = express.Router();
const sha256 = require('js-sha256');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , result : 'nothing yet'});
});

router.post('/calHash', function(req, res, next) {
  console.log(req.body);
  console.log(typeof(req.body.blockhash));
  let blockhash= req.body.blockhash;
  let prevhash= req.body.prevhash;
  let blockheight= req.body.blockheight;
  let nonce= req.body.nonce;
  let minerid= req.body.minerid;

  hashString = blockhash + prevhash + blockhash + nonce + minerid;
  let answer = sha256(hashString);
  console.log(typeof(answer));
  res.render('index', { result : answer });
});

module.exports = router;
