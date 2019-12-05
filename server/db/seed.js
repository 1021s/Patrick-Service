const faker = require('faker');
const mongoose = require('mongoose');
const Listing = require('./model.js');

const sampleListings = [];

for (let i = 0; i < 100; i += 1) {
  let id = i;

  if (id.toString().length < 2) {
    id = `00${id.toString()}`;
  } else {
    id = `0${id.toString()}`;
  }

  sampleListings.push(new Listing({
    listingId: id,
    type: faker.lorem.words(),
    yearBuilt: faker.random.number({ min: 1942, max: 2019 }),
    heating: faker.lorem.words(),
    cooling: faker.lorem.words(),
    parking: faker.lorem.words(),
    lot: `${faker.random.number({ min: 1000, max: 10000 })} sqft`,
    priceSqft: `$${faker.random.number({ min: 100, max: 1000 })}`,
    interiorDetails: {
      bedroomsAndBathrooms: {
        bedrooms: faker.random.number(6),
        bathrooms: faker.random.number(4),
        fullBathrooms: faker.random.number(3),
        halfBathrooms: faker.random.number(2),
      },
      basement: {
        basement: faker.lorem.words(),
      },
      flooring: {
        flooring: faker.lorem.words(),
      },
      heating: {
        heating: `${faker.lorem.words()}, ${faker.lorem.words()}`,
      },
      appliances: {
        appliances: `${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}`,
      },
      otherInteriorFeatures: {
        livableArea: `${faker.random.number({ min: 250, max: 15000 })} sqft`,
      },
    },
    propertyDetails: {
      parking: {
        parkingFeatures: faker.lorem.words(),
        garageSpaces: faker.lorem.words(),
      },
      property: {
        stories: faker.random.number(),
        exteriorFeatures: faker.lorem.word(),
        viewDescription: `${faker.lorem.word()}, ${faker.lorem.word()}, ${faker.lorem.word()}`,
      },
      lot: {
        lotSize: `${faker.random.number({ min: 1000, max: 10000 })} acres`,
      },
      otherPropertyInformation: {
        parcelNumber: faker.random.number(),
      },
    },
    constructionDetails: {
      typeAndStyle: {
        homeType: faker.lorem.words(),
      },
      materialInformation: {
        roof: faker.lorem.words(),
      },
      condition: {
        newConstruction: faker.random.boolean(),
        yearBuilt: faker.random.number({ min: 1942, max: 2019 }),
      },
    },
    utilitiesGreenEnergyDetails: {
      utility: {
        sewerInformation: faker.lorem.words(),
        internetAndTv: faker.lorem.words(),
      },
      greenEnergy: {
        sunscore: `${faker.lorem.words()}: ${faker.random.number(100)}`,
      },
    },
    communityAndNeighborhoodDetails: {
      location: {
        region: faker.address.county(),
      },
    },
    hoaAndFinancialDetails: {
      otherFinancialInformation: {
        taxAssessedValue: `$${faker.random.number(5000000)}`,
        annualTaxAmount: `$${faker.random.number(60000)}`,
      },
    },
  }));
}

const insertSampleListings = function insertSampleListings() {
  for (let i = 0; i < sampleListings.length; i += 1) {
    Listing.findOne({ listingId: sampleListings[i].listingId })
      .then((data) => {
        if (data === null) {
          Listing.create(sampleListings[i])
            .catch((err) => err);
        } else {
          Listing.update(data, sampleListings[i])
            .catch((err) => err);
        }
      })
      .catch((err) => err);
  }
  setTimeout(() => mongoose.disconnect(), 1000);
  return 'completed';
};

insertSampleListings();

module.exports.sampleListings = sampleListings;
module.exports.insertSampleListings = insertSampleListings;
