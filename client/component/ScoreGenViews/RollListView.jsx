import React from 'react';
import RollContainer from '../containers/RollContainer';

const RollListView = ({ rolls, setAbility, rollKeys }) => (
  <div className="roll-list-container">
    {
      rolls.map((roll, index) => <RollContainer roll={roll} key={rollKeys[index]} position={index} />)
    }
    <div className="button-list-containers">
      <button className="scoregen-reroll">REROLL</button>
      <button className="scoregen-submit" onClick={setAbility}>SUBMIT</button>
    </div>
  </div>
);

export default RollListView;
