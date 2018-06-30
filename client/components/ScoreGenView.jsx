import React from 'react';
import { string } from 'prop-types';
import RollListContainer from '../containers/RollListContainer';
import StatListContainer from '../containers/StatListContainer';
import ModListContainer from '../containers/ModListContainer';
import SelectRollContainer from '../containers/SelectRollContainer';
import HalfElfAbilityList from '../components/HalfElfViews/HalfElfAbilityList';

const ScoreGenView = ({ rollSelect, race }) => {
  console.log(HalfElfAbilityList, race);
  return (
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
  </div>
)};

ScoreGenView.propTypes = {
  rollSelect: string.isRequired,
};

export default ScoreGenView;
