var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 2 }, null, 3));
  let data = JSON.stringify({ a: 2 }, null, 3);
  fs.writeFile("public/files/data.json", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
});

router.post('/', function (req, res, next) {
  let data = JSON.stringify(req.body);
  fs.writeFile("public/files/data.json", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
});


module.exports = router;
