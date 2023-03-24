var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');  
  let data = JSON.stringify({ a: 2 }, null, 3);
  let status;
  fs.writeFile("public/files/data.json", data, (err) => {
    if (err) {      
      status = err;
      console.log(err);
    }
    else {      
      status = "Success";
      console.log("File written successfully\n");
    }
  });
  //res.json({message: status});
  res.send(data);
});

router.post('/', function (req, res, next) {
  let data = JSON.stringify(req.body);
  let status;
  fs.writeFile("public/files/data.json", data, (err) => {
    if (err) {      
      status = err;
      console.log(err);
    }
    else {      
      status = "Success";
      console.log("File written successfully\n");
    }
  });
  res.json({message: status});
});


module.exports = router;
