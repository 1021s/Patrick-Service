/* eslint-disable react/prop-types */
import React from 'react';
import '../../dist/styles.css';

const GraphicsHeader = ({ listing }) => (
  <div className="facts-container">
    <div className="graphics-container">
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/city-buildings.png" alt="" length="20px" width="20px" />
        &#8203; Type:
      </div>
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/calendar.png" alt="" length="20px" width="20px" />
        &#8203; Year built:
      </div>
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/thermometer.png" alt="" length="20px" width="20px" />
        &#8203; Heating:
      </div>
    </div>
    <div className="graphics-container">
      <div className="kind">{listing.type}</div>
      <div className="kind">{listing.yearBuilt}</div>
      <div className="kind">{listing.heating}</div>
    </div>
    <div className="graphics-container">
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/winter.png" alt="" length="20px" width="20px" />
        &#8203; Cooling:
      </div>
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/parking.png" alt="" length="20px" width="20px" />
        &#8203; Parking:
      </div>
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/floor-plan.png" alt="" length="20px" width="20px" />
        &#8203; Lot:
      </div>
      <div className="type">
        <img src="https://img.icons8.com/ultraviolet/40/000000/surface.png" alt="" length="20px" width="20px" />
        &#8203; Price/sqft:
      </div>
    </div>
    <div className="graphics-container">
      <div className="kind">{listing.cooling}</div>
      <div className="kind">{listing.parking}</div>
      <div className="kind">{listing.lot}</div>
      <div className="kind">{listing.priceSqft}</div>
    </div>
  </div>
);

export default GraphicsHeader;
