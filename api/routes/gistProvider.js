var express = require('express');
var router = express.Router();
module.exports = router;

const testURL = "https://github.com/KartikM123/MusicTree/blob/master/main.cpp"

const URLHeader = "https://github.com/";
const gistitPrefix = "http://gist-it.appspot.com/github/";
/* GET users listing. */
router.get('/', function(req, res, next) {
    let solution = 'e';
    
    //when run command, solution will show up
    res.send(req.body.gistUrl);
});
