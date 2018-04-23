import React from 'react';

const ExpProgressView = ({ experience, nextLevel }) => (
  <div className="exp-container">
    <progress value={experience} max={nextLevel} />
  </div>
);

export default ExpProgressView;
