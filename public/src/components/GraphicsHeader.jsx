import React from 'react';

const GraphicsHeader = ({ listing }) => (
  <div className="module-container">
    <div className="graphics-container">
      <div className="type">Type</div>
      <div className="type">Year built</div>
      <div className="type">Heating</div>
    </div>
    <div className="graphics-container">
      <div>{listing.type}</div>
      <div>{listing.yearBuilt}</div>
    </div>
  </div>
);

export default GraphicsHeader;
