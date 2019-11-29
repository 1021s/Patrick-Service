var models = require('../models/models.js');

module.exports.lising = {
  get: function (req, res) {
    models.messages.get((err, data) => {
      if (err) {
        res.status(404).send();
      } else {
        res.status(200).send(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.post(req.body, (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send();
      }
    });
  }
};