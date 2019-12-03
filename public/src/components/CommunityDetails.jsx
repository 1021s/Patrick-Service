import React from 'react';
import ListHelper from './ListHelper';

const CommunityDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Location</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.location).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.location[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default CommunityDetails;
