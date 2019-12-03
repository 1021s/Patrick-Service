import React from 'react';
import ListHelper from './ListHelper';

const HoaDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Other financial information</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.otherFinancialInformation).map((key, i) => (
          <ListHelper key={i} entry={key} value={listing.otherFinancialInformation[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default HoaDetails;
