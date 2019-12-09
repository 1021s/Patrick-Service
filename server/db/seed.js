const faker = require('faker');
const mongoose = require('mongoose');
const Listing = require('./model.js');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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
        stories: faker.random.number({ min: 1, max: 6 }),
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
    other: {
      sourceDetails: {
        mlsId: faker.random.number({ min: 1000000, max: 9999999 }),
      },
      otherFacts: {
        busLineNearby: faker.random.boolean(),
        propertyType: faker.lorem.word(),
        buildingInfo: faker.lorem.words(),
        energySource: faker.lorem.words(),
        masterBedroomLocation: faker.lorem.word(),
        waterSource: faker.lorem.word(),
        foundation: faker.lorem.words(),
        possesion: faker.lorem.word(),
        parkingType: faker.lorem.words(),
        form17: faker.lorem.word(),
        appliancesThatStay: faker.lorem.words(),
        heatingAndCooling: faker.lorem.words(),
        entranceLevel: faker.lorem.word(),
        roof: faker.lorem.word(),
        utilityRoomLocation: faker.lorem.word(),
        features: faker.lorem.words(),
        lotDetails: faker.lorem.words(),
        floorCovering: faker.lorem.words(),
        style: faker.lorem.words(),
        potentialTerms: faker.lorem.words(),
        kitchenLocation: faker.lorem.word(),
        architecture: faker.lorem.word(),
        lotTopography: faker.lorem.word(),
        exterior: faker.lorem.word(),
        siteFeatures: faker.lorem.words(),
        offers: faker.lorem.word(),
        commission: faker.random.number({ min: 1, max: 10 }),

      },
    },
  }));
}

const insertSampleListings = function insertSampleListings() {
  for (let i = 0; i < sampleListings.length; i += 1) {
    Listing.findOneAndUpdate({ listingId: sampleListings[i].listingId },
      sampleListings[i], { new: true, upsert: true, overwrite: true })
      .catch((err) => err);
  }
  // needed to work
  setTimeout(() => mongoose.disconnect(), 1500);

  // needed for teesting
  // mongoose.disconnect()

  return 'completed';
};

insertSampleListings();

module.exports.sampleListings = sampleListings;
module.exports.insertSampleListings = insertSampleListings;
