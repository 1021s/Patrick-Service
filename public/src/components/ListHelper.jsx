import React from 'react';

const ListHelper = ({ entry, value }) => (
  <li>
    {`${entry[0].toUpperCase()}${entry.slice(1).replace(/([a-z](?=[A-Z]))/g, '$1 ').toLowerCase()}`}
    :
    {` ${value}`}
  </li>
);

export default ListHelper;
