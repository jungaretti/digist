const Gists = require('gists');

const gists = new Gists();

function get(gistId, callback) {
    // We return the body of the response if it is successful and 0 if it fails.
    // We catch the failure in gistProvider by checking the type of the object returned in the callback.
    gists.get(gistId)
        .then(res => { return callback(res.body); })
        .catch(_ => { return callback(0) });
}

module.exports = {
    get
};