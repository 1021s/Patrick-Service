/* eslint-disable react/prop-types */
import React from 'react';
import ListHelper from './ListHelper';

const Other = ({ listing, toggleModal }) => (
  <div className="other-details-container">
    <div>
      <div>
        <div className="type">Source details</div>
        <ul>
          {typeof listing === 'object' && Object.keys(listing.sourceDetails).map((key) => (
            <ListHelper key={key} entry={key} value={listing.sourceDetails[key]} />
          ))}
        </ul>
      </div>
      <div>
        <div className="type">Other facts</div>
        <ul>
          {typeof listing === 'object' && Object.keys(listing.otherFacts).sort().slice(0, 12).map((key) => (
            <ListHelper key={key} entry={key} value={listing.otherFacts[key]} />
          ))}
        </ul>
      </div>
      <div className="link-two" onClick={toggleModal} tabIndex={0} onKeyPress={toggleModal} role="button">See data sources</div>
    </div>
    <div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.otherFacts).sort().slice(12).map((key) => (
          <ListHelper key={key} entry={key} value={listing.otherFacts[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default Other;
