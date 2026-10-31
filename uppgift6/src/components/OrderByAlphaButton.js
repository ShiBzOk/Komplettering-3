import React from 'react';

function OrderByAlphaButton({ onSortAlpha }) {
  return (
    <button className="btn btn-primary me-2 mt-3" onClick={onSortAlpha}>
      Alfabetisk ordning
    </button>
  );
}

export default OrderByAlphaButton;