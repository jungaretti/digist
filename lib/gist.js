const Gists = require('gists');

const gists = new Gists();

function get(gistId, callback) {
    gists.get(gistId)
        .then(res => { return callback(res.body); })
        .catch(_ => { return callback(0) });
}

module.exports = {
    get
};