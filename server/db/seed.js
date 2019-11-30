const db = require('./db.js');
const Listing = require('./model.js');
var faker = require('faker');

let sampleListings = [];

for (let i = 0; i < 100; i++) {

  // set up padding
  let id = i;

  if (id.toString().length < 2) {
    id = Number('00' + id.toString());
  } else {
    id = Number('0' + id.toString());
  }

  // generate different datatypes for different houses
  // will implement after everything else is working
  //if (i < 25) {
  sampleListings.push(new Listing({
    listingId: id,
    type: faker.lorem.words(),
    yearBuilt: faker.date.past(),
    Heating: faker.lorem.words(),
    cooling: faker.lorem.words(),
    parking: faker.lorem.words(),
    lot: `${faker.random.number()} sqft`,
    priceSqft: `$${faker.random.number()}`,
    interiorDetails: {
      bedroomsAndBathrooms: {
        bedrooms: faker.random.number(),
        bathrooms: faker.random.number(),
        fullBathrooms: faker.random.number(),
        halfBathrooms: faker.random.number()
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
        livableArea: `${faker.random.number()} sqft`
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
        lotSize: `${faker.random.number()} acres`
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
        yearBuilt: faker.date.past()
      }
    },
    utilitiesGreenEnergyDetails: {
      utility: {
        sewerInformation: faker.lorem.words(),
        internetAndTv: faker.lorem.words()
      },
      greenEnergy: {
        Sunscore: `${faker.lorem.words()}: ${faker.random.number()}`
      }
    },
    communityAndNeighborhoodDetails: {
      Location: {
        Region: faker.random.locale()
      }
    },
    hoaAndFinancialDetails: {
      otherFinancialInformation: {
        taxAssessedValue: `$${faker.random.number()}`,
        annualTaxAmount: `$${faker.random.number()}`
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
}
console.log(sampleListings)

const insertSampleListings = function () {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();
