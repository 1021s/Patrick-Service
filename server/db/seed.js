const db = require('./db.js');
const Listing = require('./model.js');

let sampleListings = [];

for (let i = 0; i < 100; i++) {
  // generate different datatypes for different houses
  if (i < 25) {
    sampleListings.push(new Listing({

    }));
  } else if (i < 50) {
    sampleListings.push(new Listing({

    }));
  } else if (i < 75) {
    sampleListings.push(new Listing({

    }));
  }  else if (i < 100) {
    sampleListings.push(new Listing({

    }));
  }
}

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();
