import React from 'react';

function OrderByGradeButton({ onSortGrade }) {
  return (
    <button className="btn btn-primary mt-3" onClick={onSortGrade}>
      Betygsordning
    </button>
  );
}

export default OrderByGradeButton;