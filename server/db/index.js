const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://host.docker.internal/listings', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
