import React from 'react';
import PropTypes from 'prop-types';
import RollContainer from '../../containers/RollContainer';

const RollListView = ({ rolls, setAbility, rollKeys }) => (
  <div className="gen-roll-container">
    <div className="gen-roll-list">
      {
        rolls.map((roll, index) =>
          <RollContainer roll={roll} key={rollKeys[index]} position={index} />)
      }
    </div>
    <div className="page-button-list">
      <button className="gen-roll-button">REROLL</button>
      <button className="gen-roll-button" onClick={setAbility}>SUBMIT</button>
    </div>
  </div>
);

RollListView.propTypes = {
  rolls: PropTypes.arrayOf(PropTypes.number).isRequired,
  setAbility: PropTypes.func.isRequired,
  rollKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RollListView;
