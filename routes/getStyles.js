var express = require('express');
var router = express.Router();
module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    let solution = 's';

    //when run command, solution will show up
    res.send(solution);
});