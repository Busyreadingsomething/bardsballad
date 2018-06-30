import React from 'react';
import { func, string } from 'prop-types';
import RollListContainer from '../containers/RollListContainer';
import StatListContainer from '../containers/StatListContainer';
import ModListContainer from '../containers/ModListContainer';
import SelectRollContainer from '../containers/SelectRollContainer';
import HalfElfAbilityList from '../components/HalfElfViews/HalfElfAbilityList';

const ScoreGenView = ({ rollSelect, race, selectPage }) => (
  <div className="score-gen-container">
    <StatListContainer />
    <ModListContainer />
    <SelectRollContainer />
    {
      (race === 'half-elf') ? <HalfElfAbilityList rule={2} abilities={['str', 'dex']} score={{str: 10, dex: 10}} /> : null
    }
    {
      rollSelect ? <RollListContainer /> : null
    }
    <button motion="prev" className="gen-button" onClick={selectPage}>PREV</button>
    <button motion="next" className="gen-button" onClick={selectPage}>NEXT</button>
  </div>
);

ScoreGenView.propTypes = {
  rollSelect: string.isRequired,
  race: string.isRequired,
  selectPage: func.isRequired,
};

export default ScoreGenView;
