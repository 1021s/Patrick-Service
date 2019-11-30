var mongoose = require('mongoose');

// don't think  I need these
// but holding onto them for a minute to be sure

const db = require('./index.js');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

const listingSchema = new Schema({
  listingId: String,
  type: String,
  yearBuilt: Number,
  Heating: String,
  cooling: String,
  parking: String,
  lot: String,
  priceSqft: String,
  interiorDetails: {
    bedroomsAndBathrooms: {
      type: Map,
      of: Number
    },
    basement: {
      type: Map,
      of: String
    },
    flooring: {
      type: Map,
      of: String
    },
    heating: {
      type: Map,
      of: String
    },
    appliances: {
      type: Map,
      of: String
    },
    otherInteriorFeatures: {
      type: Map,
      of: String
    },
  },
  propertyDetails: {
    parking: {
      type: Map,
      of: String
    },
    property: {
      type: Map,
      of: String
    },
    lot: {
      type: Map,
      of: String
    },
    otherPropertyInformation: {
      type: Map,
      of: String
    }
  },
  constructionDetails: {
    typeAndStyle: {
      type: Map,
      of: String
    },
    materialInformation: {
      type: Map,
      of: String
    },
    condition: {
      type: Map,
      of: String
    }
  },
  utilitiesGreenEnergyDetails: {
    utility: {
      type: Map,
      of: String
    },
    greenEnergy: {
      type: Map,
      of: String
    }
  },
  communityAndNeighborhoodDetails: {
    Location: {
      type: Map,
      of: String
    }
  },
  hoaAndFinancialDetails: {
    sourceDetails: {
      type: Map,
      of: String

    }
  }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
