import React from 'react';

const RollButtonView = ({ addRoll, reroll, restart}) => (
  <div className="ability-button-container">
    <div className="button" onClick={addRoll}>
      ROLL
    </div>
    <div className="button" onClick={reroll}>
      REROLL
    </div>
    <div className="button" onClick={restart}>
      RESTART
    </div>
  </div>
);

export default RollButtonView;
