import React from 'react';
import PropTypes from 'prop-types';

const GraphicsHeader = ({ listing }) => (
  <div className="facts-container">
    <div className="graphics-container">
      <div className="type">Type:</div>
      <div className="type">Year built:</div>
      <div className="type">Heating:</div>
    </div>
    <div className="graphics-container">
      <div>{listing.type}</div>
      <div>{listing.yearBuilt}</div>
      <div>{listing.heating}</div>
    </div>
    <div className="graphics-container">
      <div className="type">Cooling:</div>
      <div className="type">Parking:</div>
      <div className="type">Lot:</div>
      <div className="type">Price/sqft:</div>
    </div>
    <div className="graphics-container">
      <div>{listing.cooling}</div>
      <div>{listing.parking}</div>
      <div>{listing.lot}</div>
      <div>{listing.priceSqft}</div>
    </div>
  </div>
);

export default GraphicsHeader;
