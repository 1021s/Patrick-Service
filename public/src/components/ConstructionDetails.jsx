import React from 'react';
import PropTypes from 'prop-types';
import ListHelper from './ListHelper';

const ConstructionDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Type and style</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.typeAndStyle).map((key) => (
          <ListHelper key={key} entry={key} value={listing.typeAndStyle[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Material information</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.materialInformation).map((key) => (
          <ListHelper key={key} entry={key} value={listing.materialInformation[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Condition</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.condition).map((key) => (
          <ListHelper key={key} entry={key} value={listing.condition[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default ConstructionDetails;
