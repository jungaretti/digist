var express = require('express');
var router = express.Router();
module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('good')
});

module.exports = router;
