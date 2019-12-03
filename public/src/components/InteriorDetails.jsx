import React from 'react';
import ListHelper from './ListHelper';

const InteriorDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Bedrooms and bathrooms</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.bedroomsAndBathrooms).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.bedroomsAndBathrooms[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Basement</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.basement).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.basement[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Flooring</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.flooring).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.flooring[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Heating</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.heating).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.heating[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Appliances</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.appliances).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.appliances[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Other interior features</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.otherInteriorFeatures).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.otherInteriorFeatures[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default InteriorDetails;
