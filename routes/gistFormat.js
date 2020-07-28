var express = require('express');
var router = express.Router();
module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    let solution = 'e';

    //when run command, solution will show up
    res.send(solution);
});