const Model = require('./db/model.js');
const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/homedetails/:id', function (req, res) {
  Model.find({listingId: req.params.id})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
});

app.get('/allhomes', function (req, res) {
  Model.find({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send();
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}...`));

module.exports.app = app;
