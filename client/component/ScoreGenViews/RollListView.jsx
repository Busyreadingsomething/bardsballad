import React from 'react';
import RollContainer from '../containers/RollContainer';

const RollListView = ({ rolls, setAbility }) => (
  <div className="roll-list-container">
    {
      rolls.map((roll, index) => <RollContainer roll={roll} key={`roll${roll}`} position={index} />)
    }
    <div className="button-list-containers">
      <button className="scoregen-reroll">REROLL</button>
      <button className="scoregen-submit" onClick={setAbility}>SUBMIT</button>
    </div>
  </div>
);

export default RollListView;
