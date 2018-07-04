import React from 'react';
import PropType from 'prop-types';
import RollContainer from '../../containers/RollContainer';

const RollListView = ({
  rolls,
  setAbility,
  rollKeys,
  reroll,
}) => (
  <div className="gen-roll-container animated slideInBottom">
    <div className="gen-roll-list">
      {
        rolls.map((roll, index) =>
          <RollContainer roll={roll} key={rollKeys[index]} position={index} />)
      }
    </div>
    <div className="page-button-list">
      <button className="gen-roll-button" onClick={reroll}>REROLL</button>
      <button className="gen-roll-button" onClick={setAbility}>SUBMIT</button>
    </div>
  </div>
);

RollListView.propTypes = {
  rolls: PropType.arrayOf(PropType.number).isRequired,
  setAbility: PropType.func.isRequired,
  rollKeys: PropType.arrayOf(PropType.string).isRequired,
  reroll: PropType.func.isRequired,
};

export default RollListView;
