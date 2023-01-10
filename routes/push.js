var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

router.post('/', function(req, res, next) {  
  res.setHeader('Content-Type', 'application/json');
  res.end(req.body);
});


module.exports = router;
