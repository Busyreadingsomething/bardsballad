import React from 'react';
import PropTypes from 'prop-types';
import RollContainer from '../containers/RollContainer';

const RollListView = ({ rolls, setAbility, rollKeys }) => (
  <div className="roll-list-container">
    {
      rolls.map((roll, index) =>
        <RollContainer roll={roll} key={rollKeys[index]} position={index} />)
    }
    <div className="button-list-containers">
      <button className="scoregen-reroll">REROLL</button>
      <button className="scoregen-submit" onClick={setAbility}>SUBMIT</button>
    </div>
  </div>
);

RollListView.propTypes = {
  rolls: PropTypes.arrayOf(PropTypes.number).isRequired,
  setAbility: PropTypes.func.isRequired,
  rollKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RollListView;
