/* eslint-disable react/prop-types */
import React from 'react';
import '../../dist/styles.css';

const ListHelper = ({ entry, value }) => (
  <li className="item">
    <span>
      {`${entry[0].toUpperCase()}${entry.slice(1).replace(/([a-z](?=[A-Z]))/g, '$1 ').toLowerCase()}: ${value}`}
    </span>
  </li>
);

export default ListHelper;
