import React from 'react';

const ScoreView = ({ key, scores, modifiers }) => (
  <div className={key}>
    <div className="ability-value">
      {scores}
    </div>
    <div className="modifier-value">
      {modifiers}
    </div>
  </div>
);

export default ScoreView;
