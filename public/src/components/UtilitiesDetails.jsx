import React from 'react';
import ListHelper from './ListHelper';

const UtilitiesDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Utility</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.utility).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.utility[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Green energy</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.greenEnergy).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.greenEnergy[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default UtilitiesDetails;
