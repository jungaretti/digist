var express = require('express');
var router = express.Router();
module.exports = router;

const testURL = "https://github.com/KartikM123/MusicTree/blob/master/main.cpp"
const testUser = "TEST"

const URLHeader = "https://github.com/";
const blobHeader ="/blob";
const gistitPrefix = "http://gist-it.appspot.com/github/";
/* GET users listing. */
router.get('/', function(req, res, next) {
    let solution = 'e';
    
    //when run command, solution will show up
    res.send(formatURL(req.body.gitURL));
});

function formatURL(gitURL) {
    if (gitURL === undefined){
        gitURL = testURL;
    }

    //clean URL
    gitURL = gitURL.replace(URLHeader, '');

    let gitContents = gitURL.split('/');
    let userName = gitContents[0];
    let repoName = gitContents[1];
    let fileName = gitContents[gitContents.length -1];
    let folderPath = getFolderPath(gitContents);
    let parameters = `${userName}/${repoName}/${folderPath}${fileName}`

    let url = gistitPrefix + parameters;
    
    return url;
}

function getFolderPath (contents){
    let folderPath = ''
    for (let i = 2; i < contents.length-1; i++){
        let folderName = contents[i];
        folderPath += `${folderName}/`
    }
    return folderPath;
}