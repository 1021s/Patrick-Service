/* eslint-disable react/prop-types */
import React from 'react';
import ListHelper from './ListHelper';

const CommunityDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Location</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.location).map((key) => (
          <ListHelper key={key} entry={key} value={listing.location[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default CommunityDetails;
