const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://mongo:27017/listings', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = db;
