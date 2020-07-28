var express = require('express');
var router = express.Router();
var request = require('request');
module.exports = router;

const sampleGist = "https://gist.github.com/jungaretti/26b7cb6545cb1cb56d9dc8ac273ee4fc.js";

const githubAPIHeader = "https://api.github.com/gists/";

/* GET users listing. */
router.get('/', function(req, res, next) {

    //when run command, solution will show up
    parseURL(req.body.gist,res);
});

function parseURL(gist, res){
    if (gist === undefined){
        gist = sampleGist;
    }
    let id = getGistId(gist);

    var authOptions = {
        url: githubAPIHeader + id,
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

function getGistId(gist){
    //convert from http://<url>/{id} ==> parse for id
    let comp = gist.split('/')
    console.log(comp);
    console.log(comp[comp.length-1])
    console.log(comp[comp.length-1].replace('.js',''))
    return (comp[comp.length-1].replace('.js',''));

}