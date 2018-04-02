import React from 'react';

const RollButtonView = ({ addRoll, reroll, restart}) => (
  <div className="ability-button-container">
    <div className="roll-button" onClick={addRoll}>
      ROLL
    </div>
    <div className="reroll-button" onClick={reroll}>
      REROLL
    </div>
    <div className="restart-button" onClick={restart}>
      RESTART
    </div>
  </div>
);

export default RollButtonView;
