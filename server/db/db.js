var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  listingId: Number,
  type: String,
  yearBuilt: Number,
  Heating: String,
  cooling: String,
  parking: String,
  lot: String,
  priceSqft: Number,
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