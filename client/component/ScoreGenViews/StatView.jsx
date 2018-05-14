import React from 'react';

const StatView = ({ score }) => (
  <div className="ability-stat-container">
    <div className="ability-value">
      {score.val}
    </div>
  </div>
);

export default StatView;
