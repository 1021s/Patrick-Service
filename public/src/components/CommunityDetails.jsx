import React from 'react';
import PropTypes from 'prop-types';
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

CommunityDetails.propTypes = {
  listing: PropTypes.shape({
    location: PropTypes.string,
  }),
};

CommunityDetails.defaultProps = {
  listing: 'house',
};

export default CommunityDetails;
