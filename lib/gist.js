const Gists = require('gists');

const gists = new Gists();

function get(gistId, callback) {
    gists.get(gistId)
        .then(res => { return callback(res.body.files); })
        .catch(_ => { return callback('Error: Invalid gist ID.') });
}

module.exports = {
    get
};