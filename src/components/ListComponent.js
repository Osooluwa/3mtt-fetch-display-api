import React from 'react';

function ListComponent({ items, renderItem }) {
  return (
    <ul>
      {items.map((item, index) =>
        renderItem ? renderItem(item, index) : <li key={index}>{item}</li>
      )}
    </ul>
  );
}

export default ListComponent;
