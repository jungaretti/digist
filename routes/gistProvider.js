const pug = require('pug');
const express = require('express');

const gist = require('../lib/gist');
const fs = require('../lib/fileSlice');
const ic = require('../lib/icon');

const router = express.Router();

/* GET users listing. */
router.get('/gist/:gistId/', function(req, res) {
    /// Parse the slice parameter if it exists.
    let start = 0;
    let stop = 0;

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

    const file = req.query.file;
    if (file === null || file === undefined) {
        res.send('Error: Name of file missing.');
        return;
    }

    let theme = req.query.theme;
    if (theme === null || theme === undefined) {
        // Set default theme to dark.
        theme = 'dark';
    } else if (theme !== 'dark' && theme !== 'light') {
        res.send('Error: Invalid theme.');
        return;
    }

    // Get the gist.
    const gistId = req.params.gistId;
    gist.get(gistId, function(gistJson) {
        if (typeof(gistJson) == 'number') {
            // There was an error getting the gist.
            res.send('Error: Invalid gist ID.');
        } else {
            // Check validity of file.
            const files = gistJson.files;
            if (!checkFileExists(file, files)) {
                res.send('Error: File does not exist in this gist.');
                return;
            }

            if (!checkSliceInFile(file, files, start, stop)) {
                res.send('Error: Slice does not fit in file range.');
                return;
            }

            // Add the icon URL very optimistically.
            Object.keys(files).forEach(function(key) {
                files[key].icon = ic.map(files[key].language);
            });

            // Create the fileSlice.
            const userId = gistJson.owner.login;
            const url = composeGistUrl(userId, gistId);
            const fileSlice = new fs.fileSlice(file, start, stop);

            // Convert to html and respond.
            const html = convertToHTML(url, fileSlice, files, theme);
            res.send(html);
        }
    });
});

function checkFileExists(file, gistInfo){
    return (gistInfo[file] !== undefined);
}

function checkSliceInFile(file, gistInfo, start, stop){
    let totalLines = gistInfo[file]["content"].split("\n").length;
    return ((start <= totalLines) && (stop <= totalLines));
}

function composeGistUrl(userId, gistId) {
    return 'https://gist.github.com/' + userId + '/' + gistId + '/';
}

function convertToHTML(url, slice, files, theme) {
    const compiledFunction = pug.compileFile('views/snippet.pug');
    const compiledHTML = compiledFunction({
        url: url,
        slice: slice,
        files: files,
        theme: theme
    });
    return compiledHTML;
}

module.exports = router;
