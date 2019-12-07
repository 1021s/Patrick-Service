const express = require('express');
const Model = require('./db/model.js');

const app = express();
const port = 3001;

app.use(express.static(`${__dirname}/../public/dist`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/listings/:id', (req, res) => {
  Model.find({ listingId: req.params.id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/listings', (req, res) => {
  Model.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port);

module.exports.app = app;
