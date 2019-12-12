const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://database/listings', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
