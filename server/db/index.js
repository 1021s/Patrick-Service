var mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/listings', { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = db;