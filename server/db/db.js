var mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/listings', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

module.exports = db;