var express = require('express');
var router = express.Router();
var request = require('request');
module.exports = router;


const githubAPIHeader = "https://api.github.com/gists/";

/* GET users listing. */
router.get('/', function(req, res, next) {

    //when run command, solution will show up
    parseURL(req.body.gist,res);
});

function parseURL(gist, res){

    var authOptions = {
        url: githubAPIHeader + gist,
        headers: {
            "User-Agent": "digist"
        }
        };

    console.log(authOptions.url);

    request.get(authOptions, function(error,response,body){
        console.log(response.statusCode);
        if (!error){
            //console.log(JSON.parse(body))
            res.send(body)
        } else {
            res.send(error)
        }
    })

}
