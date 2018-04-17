import React from 'react';

const RollButtonView = ({ addRoll, reroll, restart}) => (
  <div className="ability-button-container">
    <button className="button" onClick={addRoll}>
      ROLL
    </button>
    <button className="button" onClick={reroll}>
      REROLL
    </button>
    <button className="button" onClick={restart}>
      RESTART
    </button>
  </div>
);

export default RollButtonView;
