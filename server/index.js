const express = require('express');
const Model = require('./db/model.js');

const app = express();
const port = 3002;

app.use(express.static(`${__dirname}/../public/dist`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/listings/:id', (req, res) => {
  Model.find({ listingId: req.params.id })
    .then((data) => {
      if (data.length !== 0) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    })
    .catch(() => {
      res.status(500).send();
    });
});

app.listen(port);

module.exports.app = app;
