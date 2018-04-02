import React from 'react';

const ScoreView = ({ stat, scores, modifiers }) => (
  <div className="ability-stat-container" id={stat}>
    <div className="ability-value">
      {scores}
    </div>
    <div className="modifier-value">
      {modifiers}
    </div>
    <div className="stat-name">{stat}</div>
  </div>
);

export default ScoreView;
