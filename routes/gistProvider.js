const express = require('express');

const gist = require('../lib/gist');

const router = express.Router();

/* GET users listing. */
router.get('/gist/:gistId/', function(req, res) {
    /// Parse the slice parameter if it exists.
    var start = 0;
    var stop = 0;

    const slice = req.query.slice;
    if (slice != null) {
        const sliceArray = slice.split(':');
        if (sliceArray.length == 2) {
            start = parseInt(sliceArray[0]);
            stop = parseInt(sliceArray[1]);

            if (start < 1 || start > stop) {
                res.send('Error: Invalid slice.');
                return;
            }
        } else {
            res.send('Error: Invalid slice.');
            return;
        }
    }

    // Get the gist.
    gist.get(req.params.gistId, function(files) {
        if (typeof(files) == 'string') {
            // There was an error getting the gist.
            res.send(files);
        } else {
            // Convert to html and respond.
            const html = convertToHtmlPlaceHolder(files, start, stop);
            res.send(html);
        }
    });
});

function convertToHtmlPlaceHolder(files, start, stop) {
    // If start and stop are = 0, do not use them. If they are non-zero, use them.
    var display = 'start: ' + start + '<br>';
    display += 'stop: ' + stop + '<br>';
    display += 'files: ' + '<br>' + JSON.stringify(files, null, 4);
    return display;
}

module.exports = router;
