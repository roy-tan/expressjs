var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:startDate/:endDate', function(req, res, next) {
  req.params.startDate
  var randomDate = randomTime(new Date(req.params.startDate), new Date(req.params.endDate));
  let data = JSON.stringify({ result: randomDate.toLocaleDateString('en-NL') });
  res.send(data);
});

function randomTime(start, end) {
  // get the difference between the 2 dates, multiply it by 0-1, 
  // and add it to the start date to get a new date 
  var diff =  end.getTime() - start.getTime();
  var new_diff = diff * Math.random();
  var date = new Date(start.getTime() + new_diff);
  return date;
}

module.exports = router;
