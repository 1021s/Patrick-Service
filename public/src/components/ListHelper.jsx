import React from 'react';

const ListHelper = ({ entry, value }) => (
  <li>
    <span>
      {`${entry[0].toUpperCase()}${entry.slice(1).replace(/([a-z](?=[A-Z]))/g, '$1 ').toLowerCase()}: ${value}`}
    </span>
  </li>
);

export default ListHelper;
