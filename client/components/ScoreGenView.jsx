import React from 'react';
import { func, string } from 'prop-types';
import RollListContainer from '../containers/RollListContainer';
import StatListContainer from '../containers/StatListContainer';
import ModListContainer from '../containers/ModListContainer';
import SelectRollContainer from '../containers/SelectRollContainer';
import HalfElfAbilityList from '../components/HalfElfViews/HalfElfAbilityList';

const ScoreGenView = ({ rollSelect, race, selectPage }) => (
  <div className="gen-score-container gen-card animated slideInRight">
    <h2 className="gen-title">Select Your Ability Score</h2>
    <StatListContainer />
    <ModListContainer />
    <SelectRollContainer />
    {
      (race === 'half-elf') ? <HalfElfAbilityList rule={2} abilities={['str', 'dex']} score={{str: 10, dex: 10}} /> : null
    }
    {
      rollSelect ? <RollListContainer /> : null
    }
    <div className="page-button-list">
      <button
        motion="prev"
        className="gen-page primary"
        onClick={selectPage}
      >
        PREV
      </button>
      <button
        motion="next"
        className="gen-page primary"
        onClick={selectPage}
      >
        NEXT
      </button>
    </div>
  </div>
);

ScoreGenView.propTypes = {
  rollSelect: string.isRequired,
  race: string.isRequired,
  selectPage: func.isRequired,
};

export default ScoreGenView;
