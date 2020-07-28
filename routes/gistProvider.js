const express = require('express');

const gist = require('../lib/gist');

const router = express.Router();

/* GET users listing. */
router.get('/gist/:gistId/', function(req, res) {
    gist.get(req.params.gistId, function(files) {
        if (typeof(files) == 'string') {
            res.send(files);
        } else {
            // convert to html and respond
            const html = files;
            res.send(html);
        }
    });
});

module.exports = router;
