/* eslint-disable react/prop-types */
import React from 'react';
import ListHelper from './ListHelper';

const PropertyDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Parking</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.parking).map((key) => (
          <ListHelper key={key} entry={key} value={listing.parking[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Property</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.property).map((key) => (
          <ListHelper key={key} entry={key} value={listing.property[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Lot</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.lot).map((key) => (
          <ListHelper key={key} entry={key} value={listing.lot[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Other property information</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.otherPropertyInformation).map((key) => (
          <ListHelper key={key} entry={key} value={listing.otherPropertyInformation[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default PropertyDetails;
