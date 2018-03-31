import React from 'react';

const ScoreView = ({ key, score }) => (
  <div className={key}>
    <div className="ability-value">
      {score.value}
    </div>
    <div className="modifier-value">
      {score.modifier}
    </div>
  </div>
);

export default ScoreView;
