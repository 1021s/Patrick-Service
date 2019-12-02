const db = require('./index.js');
const Listing = require('./model.js');
var faker = require('faker');

let sampleListings = [];

for (let i = 0; i < 100; i++) {

  // set up padding
  let id = i;

  if (id.toString().length < 2) {
    id = '00' + id.toString();
  } else {
    id = '0' + id.toString();
  }

  // generate different datatypes for different houses
  // will implement after everything else is working
  //if (i < 25) {
  sampleListings.push(new Listing({
    listingId: id,
    type: faker.lorem.words(),
    yearBuilt: faker.date.between('1942-01-01', '2018-12-31'),
    Heating: faker.lorem.words(),
    cooling: faker.lorem.words(),
    parking: faker.lorem.words(),
    lot: `${faker.random.number({min:1000, max:10000})} sqft`,
    priceSqft: `$${faker.random.number({min:100, max:1000}))}`,
    interiorDetails: {
      bedroomsAndBathrooms: {
        bedrooms: faker.random.number(6),
        bathrooms: faker.random.number(4),
        fullBathrooms: faker.random.number(3),
        halfBathrooms: faker.random.number(2)
      },
      basement: {
        basement: faker.lorem.words()
      },
      flooring: {
        flooring: faker.lorem.words()
      },
      heating: {
        heating: `${faker.lorem.words()}, ${faker.lorem.words()}`
      },
      appliances: {
        appliances: `${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}`
      },
      otherInteriorFeatures: {
        livableArea: `${faker.random.number({min:250, max:15000})} sqft`
      }
    },
    propertyDetails: {
      parking: {
        parkingFeatures: faker.lorem.words(),
        garageSpaces: faker.lorem.words()
      },
      property: {
        stories: faker.random.number(),
        exteriorFeatures: faker.lorem.word(),
        viewDescription: `${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}`
      },
      lot: {
        lotSize: `${faker.random.number({min:1000, max:10000})} acres`
      },
      otherPropertyInformation: {
        parcelNumber: faker.random.number()
      }
    },
    constructionDetails: {
      typeAndStyle: {
        homeType: faker.lorem.words()
      },
      materialInformation: {
        roof: faker.lorem.words()
      },
      condition: {
        newConstruction: faker.random.boolean(),
        yearBuilt: faker.date.between('1942-01-01', '2018-12-31')
      }
    },
    utilitiesGreenEnergyDetails: {
      utility: {
        sewerInformation: faker.lorem.words(),
        internetAndTv: faker.lorem.words()
      },
      greenEnergy: {
        Sunscore: `${faker.lorem.words()}: ${faker.random.number(100)}`
      }
    },
    communityAndNeighborhoodDetails: {
      Location: {
        Region: faker.address.county()
      }
    },
    hoaAndFinancialDetails: {
      otherFinancialInformation: {
        taxAssessedValue: `$${faker.random.number(5000000)}`,
        annualTaxAmount: `$${faker.random.number(60000)}`
      }
    }
  }));

  // } else if (i < 50) {
  //   sampleListings.push(new Listing({

  //   }));
  // } else if (i < 75) {
  //   sampleListings.push(new Listing({

  //   }));
  // } else if (i < 100) {
  //   sampleListings.push(new Listing({

  //   }));
  // }
};

const insertSampleListings = function () {
  Listing.create(sampleListings)
    .then(console.log(`${sampleListings.length} items inserted`))
};

// insertSampleListings();
module.exports.sampleListings = sampleListings;
module.exports.insertSampleListings = insertSampleListings;
