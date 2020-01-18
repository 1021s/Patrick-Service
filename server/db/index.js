const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://mongo:27017/listings', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
